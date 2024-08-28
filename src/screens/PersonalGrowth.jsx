import React, { useState } from 'react'
import { BsCardHeading } from "react-icons/bs"
import { MdCategory } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { SiNotepadplusplus } from "react-icons/si";

const PersonalGrowth = () => {
    const [list, setList] = useState([])
    const [heading, setHeading] = useState('')
    const [categories, setCategories] = useState('')
    const [link, setLink] = useState('')
    const [text, setText] = useState('')




    const saveList = () => {
        if (heading.trim()) {
            setList([...list, heading])
            setHeading('')
        }
    }





    return (
        <div  >
            <header className="PersonalHeader">
                <div>
                    <h1> Personal Growth & Well-being</h1>
                    <p>Be not afraid of growing slowly; be afraid only of standing still.</p>
                </div>
            </header>

            <div className='personal-container'>
            <div className='input-container'>
            <label htmlFor=""><BsCardHeading />   </label>
            <input className= 'innerInput' type="text" placeholder='Heading' value={heading} onChange={e => setHeading(e.target.value)} /> <br />

            <label htmlFor=""><MdCategory /> </label>
            <input className='innerInput'  type="text" placeholder='category' /> <br />

            <label htmlFor=""><FaLink /></label>
            <input className='innerInput' placeholder='https://.... Link' type="url" /><br />
            <button className='personalButton' onClick={saveList}>Save</button>
            </div>

            <div>
                <div >
            <label htmlFor=""><SiNotepadplusplus /></label>
            <input 
            className='notepadInput' 
            placeholder='Title'
            type="text"
             />
             
            </div>
            <textarea placeholder='Write down quick notes' name="" id=""></textarea>
            </div>
            
            </div>

           

            



            <table width="50%" border="1">
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>Category</th>
                        <th>Links</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                    {list.map((item, idx) => (
                        <tr>
                        <td key={idx}>{item}</td>

                    <td>{item}</td>
                    <td>{item}</td>
                    



                    <td>
                        <button>edit</button>
                        <button>delete</button>

                    </td>
                    </tr>
                ))}



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
