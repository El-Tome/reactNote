import React, { useState } from "react";
import MyCard from "./MyCard";

function AddCardComponent() {
    const [noteNames, setNoteNames] = useState([]); // Utilisation de l'état pour les noms de films
    const [noteTexts, setNoteTexts] = useState([]); // Utilisation de l'état pour les noms de films
    const [inputValueName, setInputValueName] = useState(""); // Stock la valeur de l'input
    const [inputValueText, setInputValueText] = useState(""); //// Utilisation de l'état pour les noms de films0 Stock la valeur de l'input

    function addCard() {
        if (inputValueName.trim() !== "") {
            setNoteNames([...noteNames, inputValueName]);
            setInputValueName("");

            setNoteTexts([...noteTexts, inputValueText]);
            setInputValueText("");
        }
    }

    function onEdit(index, newNoteName, newNoteText) {
        const updatedNoteNames = [...noteNames];
        const updatedNoteTexts = [...noteTexts];

        updatedNoteNames[index] = newNoteName; // Met à jour le nom de la note
        updatedNoteTexts[index] = newNoteText; // Met à jour le contenu de la note

        setNoteNames(updatedNoteNames);
        setNoteTexts(updatedNoteTexts);
    }

    function deleteCard(index) {
        const newNoteNames = noteNames.filter((_, i) => i !== index);
        setNoteNames(newNoteNames);

        const newNoteTexts = noteTexts.filter((_, i) => i !== index);
        setNoteTexts(newNoteTexts);
    }

    return (
        <div>
            <div>
                <label htmlFor="noteName">Nom de la note</label>
                <input
                    type="text"
                    name="noteName"
                    id="noteName"
                    value={inputValueName}
                    onChange={(e) => setInputValueName(e.target.value)}
                />
                <br/>
                <label htmlFor="noteText">Contenu de la note</label>
                <textarea
                    name="noteText"
                    id="noteText"
                    value={inputValueText}
                    rows={4} cols={40}
                    onChange={(e) => setInputValueText(e.target.value)}
                />
                <button onClick={addCard}>Save</button>
            </div>

            <div>
                {noteNames.map((noteName, index) => (
                    <MyCard
                        key={index}
                        noteName={noteName}
                        noteText={noteTexts[index]}
                        onEdit={(newNoteName, newNoteText) => onEdit(index, newNoteName, newNoteText)}
                        onDelete={() => deleteCard(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default AddCardComponent;
