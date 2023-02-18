import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import "../App/App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Radio } from '@material-ui/core'
import { useState } from "react";
import { useHistory } from "react-router-dom";

function PlantEntryPage() {
    const [commonName, setCommonName] = useState(null);
    const [botanicalName, setBotanicalName] = useState(null);
    const [hardnessZone, setHardnessZone] = useState(null);
    const [leafColors, setLeafColors] = useState(null);
    const [flowerColors, setFlowerColors] = useState(null);
    const [minimumHeight, setMinimumHeight] = useState(null);
    const [maximumHeight, setMaximumHeight] = useState(null);
    const [minimumSpread, setMinimumSpread] = useState(null);
    const [maximumSpread, setMaximumSpread] = useState(null);
    const [plantProperties, setPlantProperties] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

    //REMEMBER TO CREATE BUTTON!!!!!!!
    const returnHomeButton = () => {
        history.push(`/home/`) 
     }

     //REMEMBER TO CREATE BUTTON!!!!!!!""
     const submitForm = (e) => {
        e.preventDefault();

        dispatch({
            type: "POST_RESULT",
            PAYLOAD: {
                commonName,
                botanicalName,
                hardnessZone,
                leafColors,
                flowerColors,
                minimumHeight,
                maximumHeight,
                minimumSpread,
                maximumSpread,
                plantProperties,

            },
            history,
     });

     };

     return (
        <div>
            <Card>
                <h3>Add A New Plant</h3>

                <form onSubmit={submitForm}>
                </form>
            </Card>
        </div>
     )

}