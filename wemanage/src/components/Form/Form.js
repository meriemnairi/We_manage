import React, { useState } from "react";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";

const Form = () => {
  const [postData, setPostData] = useState({
    nom: "",
    prenom: "",
    email: "",
    poste: "",
    dateDeNaissance: "",
    numeroTelephone: "",
    projet: "",
    photo: "",
  });
  const classes = useStyles();

  const handleSubmit = () => {};

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={"${classes.root} ${classes.form}"}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Ajouter un nouveau compte</Typography>
        <TextField
          name="nom"
          variant="outlined"
          label="Nom"
          fullWidth
          value={postData.nom}
          onChange={(e) => setPostData({ ...postData, nom: e.target.value })}
        />
        <TextField
          name="prenom"
          variant="outlined"
          label="Prénom"
          fullWidth
          value={postData.prenom}
          onChange={(e) => setPostData({ ...postData, prenom: e.target.value })}
        />
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={postData.email}
          onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        />
        <TextField
          name="poste"
          variant="outlined"
          label="Poste"
          fullWidth
          value={postData.poste}
          onChange={(e) => setPostData({ ...postData, poste: e.target.value })}
        />
        <TextField
          name="date de naissance"
          variant="outlined"
          label="Date de naissance"
          fullWidth
          value={postData.dateDeNaissance}
          onChange={(e) =>
            setPostData({ ...postData, dateDeNaissance: e.target.value })
          }
        />
        <TextField
          name="numero de telephone"
          variant="outlined"
          label="Numéro de téléphone"
          fullWidth
          value={postData.numeroTelephone}
          onChange={(e) =>
            setPostData({ ...postData, numeroTelephone: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, photo: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Créer
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Annuler
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
