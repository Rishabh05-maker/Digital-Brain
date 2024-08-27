import React, { useState } from 'react'










const PersonalGrowth = () => {
const [list, setList] = useState([])
const [heading, setHeading] = useState('')
const [categories, setCategories] = useState('')
const [link, setLink] = useState('')
const [text, setText] = useState('')
 

const saveList = () =>{
    if (heading.trim()) {
        setList([...list, heading])
        setHeading('')
    }
}





    return (
        <div>
            <header className="PersonalHeader">
                <div>
                    <h1> Personal Growth & Well-being</h1>
                    <p>Be not afraid of growing slowly; be afraid only of standing still.</p>
                </div>
            </header>

            <label htmlFor="">Heading</label>
            <input type="text" value={heading}  onChange={e=>setHeading(e.target.value)} />

            <label htmlFor="">Categories</label>
            <input type="text" />

            <label htmlFor="">Your homepage link</label>
            <input type="url" /><br />

            <label htmlFor="">Text Area</label>
            <textarea name="" id=""></textarea>

            <button onClick={saveList}>Save</button>



            <table width="100%" border="1">
        <thead>
            <tr>
               <th>Heading</th>
               <th>Category</th>
               <th>Notes</th>
               <th>Links</th>
               <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {list.map((item, idx) => ( 
            <td key={idx}>{item}</td>))}
            <td></td>

            <td> </td>
            <td></td>
            <td> 
                <button>edit</button>
                <button>delete</button>

                 </td>
        </tbody>
</table>





            

            <div className="footer">
                <footer >
                    <p className='paragragph'>Your professional success and quality of life directly depend on your ability to manage the information around you</p>
                </footer>
            </div>
        </div>
    )
}

export default PersonalGrowth
