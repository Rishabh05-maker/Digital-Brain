import React, { useState } from 'react'
import { BsCardHeading } from "react-icons/bs"
import { MdCategory } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { SiNotepadplusplus } from "react-icons/si";

const PersonalGrowth = () => {
    const [list, setList] = useState([])
    const [heading, setHeading] = useState([])
    const [categories, setCategories] = useState([])
    const [link, setLink] = useState()




    const saveList = () => {
        if (heading.trim()) {
            setList([...list, heading])
            setHeading('')
        };
        if (categories.trim()) {
            setList([...list, categories])
            setCategories('')
        }


    }





    return (
        <div >
            <header className="PersonalHeader flex-1" >
                <div>
                    <h1 className='text-2xl font-serif'> Personal Growth & Well-being</h1>
                    <p className='font-serif'>Be not afraid of growing slowly; be afraid only of standing still.</p>
                </div>
            </header>

            <div className='personal-container '>
                <div className='input-container'>
                    <div className='flex items-baseline gap-1 '>
                    <label htmlFor=""><BsCardHeading /></label>
                    <input className='innerInput font-serif' type="text" placeholder='Heading' value={heading} onChange={e => setHeading(e.target.value)} /> <br />
                    </div>
                    <div className='flex items-baseline gap-1 '>
                    <label htmlFor=""><MdCategory /> </label>
                    <input  className='innerInput font-serif' type="text" placeholder='Category' value={categories} onChange={e=>setCategories(e.target.value)} /> <br />
                    </div>
                    <div className='flex items-baseline gap-1 '> 
                    <label htmlFor=""><FaLink /></label>
                    <input className='innerInput font-serif' placeholder='https://.... Link' type="url" /></div>

                    <button className='personalButton ml-20' onClick={saveList}>Save</button>
                </div>

                <div>
                    <div>
                        <div className='flex items-baseline'>
                        <label htmlFor=""><SiNotepadplusplus /></label>
                        <input
                            className='notepadInput font-serif'
                            placeholder='Title'
                            type="text"
                        /></div>

                    </div>
                    <textarea className='border border-slate-300 font-serif' placeholder='Write down quick notes' name="" id=""></textarea>
                </div>

            </div>







            <table className='border-collapse border border-slate-400 w-[600px]  '>
                <thead>
                    <tr>
                        <th className='border border-slate-300 font-serif'>Heading</th>
                        <th className='border border-slate-300 font-serif'>Category</th>
                        <th className='border border-slate-300 font-serif'>Links</th>
                        <th className='border border-slate-300 font-serif'>Action</th>
                    </tr>
                </thead>
                <tbody>


                    {list.map((item, idx) => (
                        <tr>
                            <td className='border border-slate-300' key={idx}>{item}</td>
                            
                            <td className='border border-slate-300'>{item}</td>
                            <td className='border border-slate-300'>{item}</td>




                            <td className='border border-slate-300'>
                                <button className='border'>edit</button>
                                <button className='border'>delete</button>

                            </td>
                        </tr>
                    ))}



                </tbody>
            </table>





            
                <footer className='footer'>
                    <p className='paragragph font-serif'>Your professional success and quality of life directly depend on your ability to manage the information around you</p>
                </footer>
            
        </div>
    )
}

export default PersonalGrowth
