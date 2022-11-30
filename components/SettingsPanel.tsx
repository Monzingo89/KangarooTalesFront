import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Switch from '@mui/material/Switch';
import SettingsIcon from '@mui/icons-material/Settings';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

interface Setting {
  key: string;
  label: string;
  getToggleHiddenProps?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  isVisible?: boolean;
  setVisibility?: Dispatch<SetStateAction<boolean>>;
}

export interface SettingGroup {
  label: string;
  settings: Setting[];
  type: string;
}

interface SettingsPanelProps {
  settingGroups: SettingGroup[];
  panelId: string;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ settingGroups, panelId }) => {
  const [settingsPanelAnchorElement, setSettingsPanelAnchorElement] = useState<null | HTMLElement>(null);

  const handleSettingsButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSettingsPanelAnchorElement(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setSettingsPanelAnchorElement(null);
  };

  return (
    <>
      <IconButton size="small" aria-controls={panelId} aria-haspopup="true" onClick={handleSettingsButtonClick}>
        <SettingsIcon color="disabled" />
      </IconButton>
      <Popover
        id={panelId}
        anchorEl={settingsPanelAnchorElement}
        keepMounted
        open={Boolean(settingsPanelAnchorElement)}
        onClose={handleCloseSettingsMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <SettingsPanelContentWrapper>
          <FormControl component="fieldset">
            {settingGroups.map((settingGroup) => (
              <FormGroup key={settingGroup.label}>
                <FormLabel component="legend" disabled>
                  {settingGroup.label}
                </FormLabel>
                {settingGroup.settings.map((setting) => {
                  if (settingGroup.type === 'tableFilters') {
                    return (
                      <FormControlLabel
                        key={setting.key}
                        control={<Switch color="primary" checked={false} {...setting.getToggleHiddenProps()} />}
                        label={setting.label}
                      />
                    );
                  }
                  if (settingGroup.type === 'toggleFilters') {
                    return (
                      <FormControlLabel
                        key={setting.key}
                        control={
                          <Switch color="primary" checked={setting.isVisible} onChange={() => setting.setVisibility(!setting.isVisible)} />
                        }
                        label={setting.label}
                      />
                    );
                  }
                  return null;
                })}
              </FormGroup>
            ))}
          </FormControl>
        </SettingsPanelContentWrapper>
      </Popover>
    </>
  );
};

const SettingsPanelContentWrapper = styled.div(() => ({ margin: '10px', padding: '10px' }));

export default SettingsPanel;
