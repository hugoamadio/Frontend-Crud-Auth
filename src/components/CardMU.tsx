import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

interface CardMUProps {
  id: string;
  name: string;
  surname: string;
  cpf: string;
  onDeleteFunction: () => void;
  onUpdateFunction: () => void;
}

export default function CardMU({ id, name, surname, cpf, onDeleteFunction, onUpdateFunction }: CardMUProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {surname}
        </Typography>
        <Typography variant="body2">{cpf}</Typography>
      </CardContent>
      <div style={{width: '100%', height: 'auto', display: 'flex', boxSizing: 'border-box', padding: "0px 13px"}}>
        <button className="button-inside-render" onClick={onDeleteFunction}><DeleteIcon/></button>
        <button className="button-inside-render" onClick={onUpdateFunction}><ModeEditIcon/></button>
      </div>
    </Card>
  );
}
