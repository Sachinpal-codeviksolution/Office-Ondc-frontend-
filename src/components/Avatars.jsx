
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from "react"
export default function Avatars() {
  return (
    <>
     <Stack direction="row" spacing={2} margin={5}>
      <Avatar
        alt="This is avatars fields"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
    
    </Stack>
    
    </>
   
   
  );
}
