import React from "react"
import BaseLayout from "./Layout/BaseLayout"
import "./Layout/PageLayout.scss"

function Profile() {
  const userInfo = {
    Prénom: "PrénomTMP",
    Nom: "NomTMP",
    Role: "RoleTMP",
    Matière: "MatièreTMP",
    Etablissement: "EtablissementTMP",
    AdresseEmail: "Addresse-email-TMP"
  }

  return (
    <div>
      <BaseLayout />
      <div style={{
        padding: "200px 0px 0px 450px"
      }}>
        <div>
            <div>
              <label_profile
                style={{fontWeight: "bold"}}>
                  Prénom:
              </label_profile>
              <label_profile2>
                  {userInfo.Prénom}
              </label_profile2>
            </div>
            <div>
              <label_profile
                style={{fontWeight: "bold"}}>
                  Nom:
              </label_profile>
              <label_profile2>
                  {userInfo.Nom}
              </label_profile2>
            </div>
            <div>
              <label_profile
                style={{fontWeight: "bold"}}>
                  Rôle:
              </label_profile>
              <label_profile2>
                {userInfo.Role}
              </label_profile2>
            </div>
            <div>
              <label_profile
                style={{fontWeight: "bold"}}>
                  Matière:
              </label_profile>
              <label_profile2>
                {userInfo.Matière}
              </label_profile2>
            </div>
            <div>
              <label_profile
                style={{fontWeight: "bold"}}>
                  Etablissement:
              </label_profile>
              <label_profile2>
                {userInfo.Etablissement}
              </label_profile2>
            </div>
            <div>
              <label_profile
                style={{fontWeight: "bold"}}>
                  Adresse email:
              </label_profile>
              <label_profile2>
                {userInfo.AdresseEmail}
              </label_profile2>
            </div>
        </div>
        <div style={{
          position: "relative",
          padding: "0px 0px 0px 1050px",
          top: "-400px"
        }}>
        <img
          alt=""
          src={require("./../../assets/ImageProfil.png")}
          className="d-inline-block align-top"
        />
        </div>
      </div>
    </div>
  )
}

export default Profile;
