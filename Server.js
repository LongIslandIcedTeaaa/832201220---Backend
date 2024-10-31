const express = require('express');
const contactsRoutes = require('./routes/contacts');
const app = express();

app.use(express.json());
app.use('/api/contacts', contactsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
