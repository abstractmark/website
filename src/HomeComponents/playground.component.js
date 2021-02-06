import React, { useEffect, useState } from "react";
import {AbstractMark} from "@abstractmark/abstractmark";

const Playground = () => {
    const [AMSource, setAMSource] = useState('');
    const [styled, setStyled] = useState(true);
    const [exportFormat, setExportFormat] = useState('');

    // Update document title and remove the body margin
    useEffect(() => {
        document.title = "AbstractMark playground"
        document.body.style.margin = "0 !important";
    }, [])

    useEffect(() => {
        document.querySelectorAll("textarea").forEach(el => {
            el.onkeydown = function(e) {
                if (e.keyCode === 9) { // tab was pressed
                    // get caret position/selection
                    var val = this.value,
                        start = this.selectionStart,
                        end = this.selectionEnd;
                    // set textarea value to: text before caret + tab + text after caret
                    this.value = val.substring(0, start) + '\t' + val.substring(end);
                    // put caret at right position again
                    this.selectionStart = this.selectionEnd = start + 1;
                    // prevent the focus lose
                    return false;
                }
            };
        })
    }, [])
    
    const copyText = () => {
        // Copy text to keyboard
        let el = document.querySelector("textarea");
        el.select();
        document.execCommand("copy")
    }

    const openExportModal = () => {
        let exportModal = document.querySelector('#exportModal');
        exportModal.style.display = "block";
        document.querySelector("#closeExportModal").addEventListener("click", () => exportModal.style.display = "none" )
        window.addEventListener("click", (e) => {
            if(e.target === exportModal) document.querySelector('#exportModal').style.display = "none";
        })
    }

    const exportFile = e => {
        e.preventDefault();
        const saveFile = (data, filename) => {
            var blob = new Blob([data], {type: 'text/am'});
            if(window.navigator.msSaveOrOpenBlob){
                window.navigator.msSaveBlob(blob, filename);
            }else{
                var element = document.createElement("a");
                element.setAttribute("href", window.URL.createObjectURL(blob));
                element.setAttribute("download", filename);
                element.style.display = "none";
                document.body.appendChild(element);
                element.click()
                document.body.removeChild(element)
            }
        }
        if(exportFormat === "AM") saveFile(AMSource, 'download.am')
        else if(exportFormat === "HTML") saveFile(AbstractMark(AMSource, {styled: styled, fullHTMLTags: true}), 'example.html')
    }

    return(
        <div className="playground">
            <h1 className="playground-title">AbstractMark Playground</h1>
            <textarea value={AMSource} onChange = {({target: {value}}) => setAMSource(value)} className="playground-input" spellCheck="false"></textarea>
            <div dangerouslySetInnerHTML={{ __html: AbstractMark(AMSource, {styled: styled, fullHTMLTags: true}) }} className="playground-preview"></div>
            <div className="playground-options">
                <div className="playground-checkbox-options">
                    <input type = "checkbox" id="styled" defaultChecked={styled} onChange ={({target: {checked}}) => setStyled(checked)} />
                    <label htmlFor = "styled">Styled</label>
                </div>
                <button className="playground-option-button" onClick = {() => copyText()}>Copy code</button>
                <button onClick = {() => setAMSource("")} className="playground-option-button">Reset</button>
                <button onClick = {() => openExportModal()} className="playground-option-button">Export</button>
            </div>
            <div className="playground-export-modal" id="exportModal">
                <form className="playground-export-modal-content" onSubmit = {exportFile}>
                    <span className="playground-export-close-modal" id="closeExportModal">&times;</span>
                    <p>Export as:</p>
                    <div>
                        <input type = "radio" id="html" name="exportFormat" value="HTML" onChange={({target: {value}}) => setExportFormat(value)} defaultChecked={exportFormat === "HTML"} required />
                        <label htmlFor = "html">HTML file</label>
                    </div>
                    <div>
                        <input type = "radio" id="am" name="exportFormat" value = "AM"  onChange={({target: {value}}) => setExportFormat(value)} defaultChecked={exportFormat === "AM"} required />
                        <label htmlFor = "am">AbstractMark file</label>
                    </div>
                    <div className="form-group">
                        <input type = "submit" className="export-btn" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Playground