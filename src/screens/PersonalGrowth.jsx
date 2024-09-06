import React, { useState } from 'react';
import { BsCardHeading } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { SiNotepadplusplus } from "react-icons/si";
import { div } from 'framer-motion/client';

const PersonalGrowth = () => {
    const [list, setList] = useState([])
    const [notes, setNotes] = useState([])
    const [heading, setHeading] = useState('')
    const [categories, setCategories] = useState('')
    const [link, setLink] = useState('')
    const [noteTitle, setNoteTitle] = useState('')
    const [noteContent, setNoteContent] = useState('')
    const [editIndex, setEditIndex] = useState(null)

    const saveList = () => {
        if (heading.trim() && categories.trim() && link.trim()) {
            const newItem = { heading, categories, link }

            if (editIndex !== null) {
                const updatedList = [...list];
                updatedList[editIndex] = newItem
                setList(updatedList)
                setEditIndex(null)
            } else {
                setList([...list, newItem])
            }

            setHeading('')
            setCategories('')
            setLink('')
        }
    };

    const editItem = (index) => {
        const itemToEdit = list[index]
        setHeading(itemToEdit.heading)
        setCategories(itemToEdit.categories)
        setLink(itemToEdit.link)
        setEditIndex(index)
    };

    const deleteItem = (index) => {
        const updatedList = list.filter((_, idx) => idx !== index)
        setList(updatedList)
    };

    const saveNote = () => {
        if (noteTitle.trim() && noteContent.trim()) {
            const newNote = { title: noteTitle, content: noteContent }
            setNotes([...notes, newNote])
            setNoteTitle('')
            setNoteContent('')
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <header
                className="PersonalHeader mb-8 bg-cover bg-center p-8 text-white rounded-lg shadow-md"
            >
                <h1 className="text-xl font-serif font-bold mb-2">
                    Personal Growth & Well-being
                </h1>
                <p className="font-serif text-sm">
                    Be not afraid of growing slowly; be afraid only of standing still.
                </p>
            </header>

            <label htmlFor="">Heading</label>
            <input className='border' type="text" 
            placeholder='heading'
            />

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

                    <div className="flex items-center gap-2">

                        <label htmlFor="">
                            <BsCardHeading className="text-gray-600" />
                        </label>
                        <input
                            className="border border-gray-300 rounded  w-full focus:border-blue-500 text-2xl p-1"
                            type="text"
                            placeholder="name"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="">
                            <MdCategory className="text-gray-600" />
                        </label>
                        <input
                            className="border border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500 text-xl p-1"
                            type="text"
                            placeholder="Category"
                            value={categories}
                            onChange={(e) => setCategories(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="">
                            <FaLink className="text-gray-600" />
                        </label>
                        <input
                            className="border border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500 text-xl p-1"
                            placeholder="https://.... Link"
                            type="url"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white rounded p-1 text-xl hover:bg-blue-600 transition-colors"
                        onClick={saveList}
                    >
                        {editIndex !== null ? 'Update' : 'Save'}
                    </button>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <label htmlFor="">
                            <SiNotepadplusplus className="text-gray-600" />
                        </label>
                        <input
                            className="border border-gray-300 rounded p-1 text-xl w-full focus:border-blue-500 text-2xl p-1"
                            placeholder="Title"
                            type="text"
                            value={noteTitle}
                            onChange={(e) => setNoteTitle(e.target.value)}
                        />
                    </div>
                    <textarea
                        className="border border-gray-300 rounded p-1 text-sm w-full h-24 focus:border-blue-500 text-2xl p-1"
                        placeholder="Write down quick notes"
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                    />
                    <button
                        className="mt-2 bg-green-500 text-white rounded p-1 text-xl hover:bg-green-600 transition-colors"
                        onClick={saveNote}
                    >
                        Save Note
                    </button>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Saved Notes</h2>
                {notes.length > 0 ? (
                    <ul className="space-y-4">
                        {notes.map((note, index) => (

                            <div className=''>
                            <li
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                            >
                                <h3 className="font-semibold text-lg mb-2">{note.title}</h3>
                                <p className="text-gray-700 text-sm">{note.content}</p>
                                <button className='w-50 border-2 p-1 text-sm  bg-red-500'>remove</button>
                            </li></div>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-sm">No notes saved yet.</p>
                )}
            </div>

            <table className="border-collapse border border-gray-300 w-full mt-6 bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 p-1 text-xl">Name</th>
                        <th className="border border-gray-300 p-1 text-xl">Category</th>
                        <th className="border border-gray-300 p-1 text-xl">Links</th>
                        <th className="border border-gray-300 p-1 text-xl">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, idx) => (
                        <tr key={idx} className="even:bg-gray-100">
                            <td className="border border-gray-300 p-1 text-sm">{item.heading}</td>
                            <td className="border border-gray-300 p-1 text-sm">{item.categories}</td>
                            <td className="border border-gray-300 p-1 text-sm">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    {item.link}
                                </a>
                            </td>
                            <td className="border border-gray-300 p-1 text-sm">
                                <button
                                    className="bg-yellow-300 text-gray-800 rounded p-1 text-sm mr-2 hover:bg-yellow-400 transition-colors"
                                    onClick={() => editItem(idx)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white rounded p-1 text-sm hover:bg-red-600 transition-colors"
                                    onClick={() => deleteItem(idx)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <footer className="footer mt-8 text-center">
                <p className="font-serif text-sm text-center p-2 text-gray-600">
                    Your professional success and quality of life directly depend on your
                    ability to manage the information around you
                </p>
            </footer>
        </div>
    );
};

export default PersonalGrowth;
