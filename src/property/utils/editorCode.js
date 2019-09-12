import { EditorContainer } from "@utils/iframe"

export function editorCode(value,language){
    $("#editor-container").show()
        const editor =  new EditorContainer({
            url:"http://www.css-editor.com/editor/",
            heigth:"50%",
            width:"50%",
            container:"#editor-container", 
            listen(data){  
                $("#editor-container").hide()
                console.log(data)
            }
        })
        console.log(value,language)
        editor.sendMessageToChild({
            type:"SET_VALUE",
            value,
            language
        })
}