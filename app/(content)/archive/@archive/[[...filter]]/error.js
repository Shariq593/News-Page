'use client'
export default function FilterError({error}){
    return <div className="error">
        <h2>An Error Occured</h2>
        <p>{error.message}</p>
    </div>

}