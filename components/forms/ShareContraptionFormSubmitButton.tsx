import {useFormStatus} from 'react-dom';
import {Button} from "@mantine/core";
import classes from "@/app/contraptions/share/page.module.css";

export default function ShareContraptionFormSubmitButton({pending} : {pending: boolean}){
    // const {pending} = useFormStatus(); Incompatible with Mantine
    
    return (
        <Button disabled={pending} className={classes.submit} type="submit" size="md">
            {pending ? 'Submitting...' : 'Share Contraption'}
        </Button>
    );
}