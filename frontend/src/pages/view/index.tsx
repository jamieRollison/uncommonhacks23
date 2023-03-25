import { viewNote } from "../../api"

const View: any = async () => {
    // returning text
    const note = await viewNote();
    console.log(note);

    return (
        <div>
            
        </div>
    )
}

export default View