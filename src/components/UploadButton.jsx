const UploadButton = () => (
    <>
        <label for="file-upload"></label>
        <input type="file" id="file-upload" accept=".pdf, .doc, .docx" />
    </>
)

// prevent users from making very large files using maxSize property or something
//if someone decides to submit an entire book to this client it will be extremely expensive

export default UploadButton;