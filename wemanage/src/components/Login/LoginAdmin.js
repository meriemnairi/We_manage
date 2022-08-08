//import react from 'react';
//import { useState } from "react";
//import { useDispatch } from "react-redux";
//import { adminLogin } from "../redux/action";

const Login = () => {
  

  
  
  return (
    <div class="authincation h-100">
      <div class="container-fluid h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-md-6">
            <div class="authincation-content">
              <div class="row no-gutters">
                <div class="col-xl-12">
                  <div class="auth-form">
                    <h2 class="text-center mb-4">Connexion Admin</h2>
                    <form action="index.html">
                      <div class="form-group">
                        <label><strong>Nom d'utilisateur</strong></label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label><strong>Mot de passe</strong></label>
                        <input
                          type="password"
                          class="form-control"
                          value="Password"
                        />
                      </div>
                      <div
                        class="form-row d-flex justify-content-between mt-4 mb-2"
                      >
                        <div class="form-group">
                          <div class="form-check ml-2">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="basic_checkbox_1"
                            />
                            <label
                              class="form-check-label"
                              for="basic_checkbox_1"
                              >Souvennez de moi</label>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block">
                          se connecter
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Login ;





