const { events } = require('./data.json');
export default (req, res) => {
  const evt = events.filter(ev => ev.slug === req.query.slug);

  if (req.method === 'GET') {
    return res.status(200).json(evt);
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).json({ message: `Method ${req.method} is not allowed` });
};
