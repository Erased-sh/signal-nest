


import { FC } from "react";
import Typography from '@mui/material/Typography';

import Link from "next/link";

interface ITypography{
   value:string, 
   link:string,
}

export const TypographyDef:FC<ITypography>=({value,link})=>{


return (
   <Typography><Link href={link}>{value}</Link> </Typography>

)
}