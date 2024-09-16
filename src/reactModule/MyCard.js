// MyCard.js
import React, {useState} from "react";

function MyCard({ noteName, noteText, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false); // Gère le mode d'édition
    const [newNoteName, setNewNoteName] = useState(noteName); // Nouveau nom de la note
    const [newNoteText, setNewNoteText] = useState(noteText); // Nouveau contenue note

    function toggleEditMod() {
        setIsEditing(!isEditing);
    }

    function handleSaveEdit() {
        onEdit(newNoteName, newNoteText); // Sauvegarde le nouveau nom
        setIsEditing(false); // Désactive le mode d'édition
    }

    return (
        <div className="card">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newNoteName}
                        onChange={(e) => setNewNoteName(e.target.value)}
                    />
                    <br/>
                    <textarea
                        name="noteText"
                        id="noteText"
                        value={newNoteText}
                        rows={4} cols={40}
                        onChange={(e) => setNewNoteText(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                </>
            ) : (
                <>
                    <h3>{noteName}</h3>
                    <p>{noteText}</p>
                    <button onClick={toggleEditMod}>Edit</button>
                </>
            )}
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default MyCard;
