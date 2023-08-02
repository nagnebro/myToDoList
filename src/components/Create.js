import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useNextId } from '../Context';

function Create(){
    const [open,setOpen] = useState(false);
    const [value, setValue] = useState("");
    const disaptch = useDispatch();
    const nextId = useNextId();

    const onToggle = ()=> setOpen(!open);
    const handleChange = e => setValue(e.target.value); // (e)로 작성해도 된다. 

    const handleSubmit = e => {

        e.preventDefault();
        disaptch({
            type:'CREATE',
            todo : {
                id : nextId.current,
                text : value,
                done : false
            }
        })
        nextId.current += 1;
        setOpen(false);
        setValue('');
    };


    return(

        <>
            {open && (
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                        value = {value}
                        onChange={handleChange}
                        placeholder="앞으로 할 일을 작성해주세요."
                        />
                    </form>
                </div>
            </div>
            )}
            <button onClick={onToggle} open = {open}>
                <MdAdd/>
            </button>
        </>
    );
}

export default Create;