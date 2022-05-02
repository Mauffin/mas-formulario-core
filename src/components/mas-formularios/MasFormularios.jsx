import React,{useState} from "react";

const MasFormularios = () =>{

    const[nombre,setNombre] = useState("");
    const[apellido,setApellido] =  useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirm,setConfirm] = useState("");
    const[hizoSubmit,setHizosubmit] = useState(false);

    const crearUsuario = (e) =>{
        e.prevenntDefault();
        console.log("Nombre: "+nombre+", Apellido: "+apellido+"Email: "+email);
        setNombre();
        setApellido("");
        setEmail("");
        setPassword("");
        setConfirm("");
        setHizosubmit(true);
    
    }

    const mensaje = () =>{
        if(hizoSubmit){
            return "Gracias por sus datos! Bienvenido"
        }else{
            return "favor de llenar sus datos!"
        }
    }

    const mensajeNombre = ()=>{
        if(nombre === ""){
            return ""
        }if(nombre.length <= 2){
            return "el campo debe tener al menos 2 caracteres"
        }
        
    }
    const mensajeApellido = () =>{
        if(apellido === ""){
            return ""
        }if(apellido.length <= 2){
            return "el campo debe tener al menos 2 caracteres"
        }
    }
    const mensajeEmail = () =>{
        if(email === ""){
            return""
        }if(email.length <= 5){
            return " el campo debe tener al menos 5 caracteres."
        }
    }
    const mensajePassword = () =>{
        if(password === ""){
            return ""
        }if(password.length <= 8){
            return "el campo debe tener al menos 8 caracteres"
        }
    }

    const mensajeConfirm = () =>{
        if(confirm !== password){
            return "las password no coinsiden :3"
        }
    }

    return(
        <form onSubmit={crearUsuario}>
            <h2>Crear Usuario</h2>
            <div className='form-group'>
                <label htmlFor='nombre'>Nombre</label><br></br>
                {mensajeNombre()}
                <input id="nombre" onChange={(e)=>setNombre(e.target.value)} value={nombre} className='form-control'/>
                
                <label>Apellido</label><br></br>
                {mensajeApellido()}
                <input id="apellido" onChange={(e)=>setApellido(e.target.value)} value={apellido} className='form-control'/>
                
                <label>E-mail</label><br></br>
                {mensajeEmail()}
                <input id="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='form-control'/>
                
                <label>Password</label><br></br>
                {mensajePassword()}
                <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className='form-control'/>
                
                <label>Confirm Password</label><br></br>
                {mensajeConfirm()}
                <input id="confirm" type={"password"} onChange={(e)=>setConfirm(e.target.value)} value={confirm} className='form-control'/>
            
            </div>
            
            <button type="submit" className='btn btn-success' >Crear Usuario</button>
            <br></br>
            {mensaje()}
    
        </form>
    )
}
export default MasFormularios;
