import React from 'react'

const Login = () => {
    const handleSubmit = ()=>{

    }
    return (
        <div style={{ padding: 40, margin: 120 }}><form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" id="password" />
            </div>
            <button type="submit" class="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
        </form></div>
    )
}

export default Login