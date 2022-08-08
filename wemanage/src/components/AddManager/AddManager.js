import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";

import { createManager, updateManager } from "../../actions/managers";

const AddManager = ({ currentId, setCurrentId }) => {
  const [managerData, setManagerData] = useState({
    nom: "",
    prenom: "",
    email: "",
    poste: "",
    motDePasse: "",
    numeroTelephone: "",
    projet: "",
    photo: "",
  });
  const manager = useSelector((state) =>
    currentId ? state.managers.find((nom) => nom._id === currentId) : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (manager) setManagerData(manager);
  }, [manager]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createManager(managerData));
      clear();
    } else {
      dispatch(updateManager(currentId, managerData));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(0);
    setManagerData({
      nom: "",
      prenom: "",
      email: "",
      poste: "",
      motDePasse: "",
      numeroTelephone: "",
      projet: "",
      photo: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${manager.nom}"` : "Ajouter un nouveau compte"}
        </Typography>
        <TextField
          name="nom"
          variant="outlined"
          label="Nom"
          fullWidth
          value={managerData.nom}
          onChange={(e) =>
            setManagerData({ ...managerData, nom: e.target.value })
          }
        />
        <TextField
          name="prenom"
          variant="outlined"
          label="Prénom"
          fullWidth
          value={managerData.prenom}
          onChange={(e) =>
            setManagerData({ ...managerData, prenom: e.target.value })
          }
        />
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={managerData.email}
          onChange={(e) =>
            setManagerData({ ...managerData, email: e.target.value })
          }
        />
        <TextField
          name="poste"
          variant="outlined"
          label="poste"
          fullWidth
          value={managerData.poste}
          onChange={(e) =>
            setManagerData({ ...managerData, poste: e.target.value })
          }
        />
        <TextField
          name="projet"
          variant="outlined"
          label="projet"
          fullWidth
          value={managerData.projet}
          onChange={(e) =>
            setManagerData({ ...managerData, projet: e.target.value })
          }
        />
        <TextField
          name="date de naissance"
          variant="outlined"
          label="Date de naissance"
          fullWidth
          value={managerData.motDePasse}
          onChange={(e) =>
            setManagerData({ ...managerData, motDePasse: e.target.value })
          }
        />
        <TextField
          name="numero de telephone"
          variant="outlined"
          label="Numéro de téléphone"
          fullWidth
          value={managerData.numeroTelephone}
          onChange={(e) =>
            setManagerData({ ...managerData, numeroTelephone: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setManagerData({ ...managerData, photo: base64 })
            }
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

export default AddManager;
