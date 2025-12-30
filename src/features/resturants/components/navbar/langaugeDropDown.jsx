import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function LangaugeDropDown() {
    const [language, setLanguage] = React.useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (

        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={language}
                    onChange={handleChange}
                    autoWidth
                    defaultValue='en'
                >
                    
                    <MenuItem value="en">
                        <em>
      <img src="/Languages/English.png" alt='English' height="24" width="24" />
                  
                        </em>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
