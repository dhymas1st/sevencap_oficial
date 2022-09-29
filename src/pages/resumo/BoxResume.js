import { Box, Typography, Stack, Paper } from '@mui/material';
const BoxResume = ({ title, value }) => {
    return (
        <>
            <Paper elevation={2}>
                <Box
                    elevation={2}
                    sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        borderRadius: 2,
                        padding: 2
                    }}
                >
                    <Stack>
                        <Typography variant="h4">{title}</Typography>
                        <Typography variant="body1">R${value}</Typography>
                    </Stack>
                </Box>
            </Paper>
        </>
    );
};

export default BoxResume;
