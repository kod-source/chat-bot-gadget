import { SpeedDial, SpeedDialAction, Box } from '@mui/material';
import { FC } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  restartChats: () => void;
  endChats: () => void;
}

export const SpeedDialTooltipOpen: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const actions = [
    {
      icon: <RestartAltIcon />,
      name: '最初からやり直す',
      function: () => props.restartChats(),
    },
    {
      icon: <SavedSearchIcon />,
      name: '途中までの結果を見る',
      function: () => props.endChats(),
    },
  ];

  return (
    <Box className='absolute bottom-1 left-[105%]'>
      <SpeedDial
        ariaLabel='SpeedDial uncontrolled open example'
        icon={open ? <CloseIcon /> : <AddIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        onClick={handleOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.function}
            tooltipPlacement='right'
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
