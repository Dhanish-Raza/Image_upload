// import React from 'react';
// import { UserCircle } from 'lucide-react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// export default function App() {
//   const data = [
//     { name: 'Q1', value: 65 },
//     { name: 'Q2', value: 80 },
//     { name: 'Q3', value: 45 },
//     { name: 'Q4', value: 75 },
//   ];

//   const financeNews = [
//     {
//       title: "Bitcoin Surges Past $70K as ETFs Drive Demand",
//       source: "CoinDesk",
//       time: "2 hours ago",
//     },
//     {
//       title: "Federal Reserve Holds Rates Steady Amid Inflation Concerns",
//       source: "Bloomberg",
//       time: "5 hours ago",
//     },
//     {
//       title: "Apple's Q2 Earnings Exceed Expectations",
//       source: "CNBC",
//       time: "Yesterday",
//     },
//     {
//       title: "Oil Prices Decline as Supply Outpaces Demand",
//       source: "Reuters",
//       time: "2 days ago",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-dark-blue text-white p-4">
//       {/* Navbar */}
//       <div className="bg-light-blue rounded-lg p-4 flex justify-between items-center mb-6 shadow-md">
//         <h1 className="text-2xl font-bold">Finance Dashboard</h1>
//         <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
//           <UserCircle className="text-dark-blue w-6 h-6" />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left Column */}
//         <div className="flex flex-col gap-4">
//           {/* Box 1 */}
//           <div className="bg-cta-blue rounded-lg h-[70vh] shadow-md p-4 overflow-hidden flex flex-col">
//             <div className="overflow-y-auto pr-1 scrollbar-hide">
//               <p className="text-lg font-semibold mb-4 text-red-200">🚨 Suspicious Activities</p>
//               <div className="flex flex-col gap-3">
//                 {[
//                   { title: 'Unusual BTC Transaction', time: '2 hours ago' },
//                   { title: 'Login from Unknown Device', time: '4 hours ago' },
//                   { title: 'Failed Withdrawal Attempt', time: '6 hours ago' },
//                   { title: 'Multiple Login Failures', time: 'Yesterday' },
//                   { title: 'Suspicious Location Access', time: '2 days ago' },
//                   { title: 'Email Changed', time: '3 days ago' },
//                 ].map((activity, i) => (
//                   <div key={i} className="bg-dark-blue p-3 rounded shadow text-sm text-white/80">
//                     <p className="font-medium text-white">{activity.title}</p>
//                     <p className="text-xs text-white/60 mt-1">{activity.time}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Button below Box 1 */}
//           <button className="bg-gold text-dark-blue font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-yellow-400 transition duration-200">
//             Report
//           </button>
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col gap-4">
//           {/* Graph Box */}
//           <div className="bg-cta-blue rounded-lg shadow-md p-4">
//             <p className="text-lg font-semibold mb-2">📈 Monthly Reports</p>
//             <div className="h-48 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
//                   <XAxis dataKey="name" stroke="#cbd5e1" />
//                   <YAxis stroke="#cbd5e1" />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#FFD700" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//             <p className="text-sm mt-2 text-green">Growth: +18% this quarter</p>
//           </div>

//           {/* News Feed Box */}
//           <div className="bg-cta-blue rounded-lg shadow-md p-4">
//             <p className="text-lg font-semibold mb-2">📰 Finance News</p>
//             <div className="flex flex-col gap-3 text-sm text-white/80">
//               {financeNews.map((news, i) => (
//                 <div key={i} className="bg-dark-blue p-3 rounded">
//                   <p className="font-medium text-white">{news.title}</p>
//                   <p className="text-xs mt-1 text-white/60">{news.source} • {news.time}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












// import React from 'react';
// import { UserCircle } from 'lucide-react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Scatter,
// } from 'recharts';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function App() {
//   const seiAnomalies = [
    // { date: '2024-02-15', price: 0.8799 },
    // { date: '2024-02-16', price: 0.9323 },
    // { date: '2024-02-17', price: 0.9335 },
    // { date: '2024-02-18', price: 0.9079 },
    // { date: '2024-02-19', price: 0.9638 },
    // { date: '2024-02-20', price: 0.9227 },
    // { date: '2024-02-21', price: 0.9348 },
    // { date: '2024-02-22', price: 0.8757 },
    // { date: '2024-02-25', price: 0.8587 },
    // { date: '2024-02-27', price: 0.8904 },
    // { date: '2024-02-28', price: 0.8901 },
    // { date: '2024-02-29', price: 0.8690 },
    // { date: '2024-03-02', price: 0.8591 },
    // { date: '2024-03-03', price: 0.8485 },
    // { date: '2024-03-08', price: 0.9497 },
    // { date: '2024-03-09', price: 0.9302 },
    // { date: '2024-03-10', price: 0.9029 },
    // { date: '2024-03-11', price: 0.8682 },
    // { date: '2024-03-12', price: 0.8977 },
    // { date: '2024-03-13', price: 0.9026 },
    // { date: '2024-03-14', price: 0.8988 },
    // { date: '2024-03-15', price: 0.8676 },
    // { date: '2024-03-16', price: 1.0407 },
    // { date: '2024-03-17', price: 0.8986 },
    // { date: '2024-03-18', price: 0.9017 },
    // { date: '2024-03-21', price: 0.8677 },
    // { date: '2024-03-28', price: 0.8946 },
    // { date: '2024-03-29', price: 0.8656 },
//   ];

//   const financeNews = [
//     {
//       title: "Bitcoin Surges Past $70K as ETFs Drive Demand",
//       source: "CoinDesk",
//       time: "2 hours ago",
//     },
//     {
//       title: "Federal Reserve Holds Rates Steady Amid Inflation Concerns",
//       source: "Bloomberg",
//       time: "5 hours ago",
//     },
//     {
//       title: "Apple's Q2 Earnings Exceed Expectations",
//       source: "CNBC",
//       time: "Yesterday",
//     },
//     {
//       title: "Oil Prices Decline as Supply Outpaces Demand",
//       source: "Reuters",
//       time: "2 days ago",
//     },
//   ];

//   return (
//     <div className="min-vh-100 bg-dark text-white p-4">
//       {/* Navbar */}
//       <div className="bg-primary rounded p-4 d-flex justify-content-between align-items-center mb-4 shadow">
//         <h1 className="h4 fw-bold mb-0">Finance Dashboard</h1>
//         <div className="rounded-circle bg-white d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
//           <UserCircle className="text-primary" size={24} />
//         </div>
//       </div>

//       <div className="row g-4">
//         {/* Left Column */}
//         <div className="col-12 col-md-6 d-flex flex-column gap-3" style={{ height: 'calc(100vh - 150px)' }}>
//           <div className="bg-secondary rounded p-3 shadow flex-grow-1 overflow-auto">
//             <p className="fw-semibold text-warning mb-3">📌 SEI Anomalies</p>
//             <div className="d-flex flex-column gap-2">
//               {seiAnomalies.map((item, i) => (
//                 <div key={i} className="bg-dark p-2 rounded shadow-sm text-white-50">
//                   <p className="fw-medium text-white mb-1">Close: ${item.price.toFixed(4)}</p>
//                   <small className="text-muted">Date: {item.date}</small>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             className="btn btn-warning text-dark fw-semibold shadow"
//             style={{ height: '192px', fontSize: '1.5rem' }}
//           >
//             Report
//           </button>
//         </div>

//         {/* Right Column */}
//         <div className="col-12 col-md-6 d-flex flex-column gap-3">
//           {/* Graph Box */}
//           <div className="bg-secondary rounded p-3 shadow">
//             <p className="fw-semibold mb-3">📈 SEI Price with Anomalies</p>
//             <div style={{ height: '250px' }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={seiAnomalies} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
//                   <XAxis dataKey="date" stroke="#cbd5e1" />
//                   <YAxis stroke="#cbd5e1" domain={[0.8, 1.1]} />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="price" stroke="#00BFFF" strokeWidth={3} name="SEI Price" />
//                   <Scatter data={seiAnomalies.filter(d => d.price > 0.95)} fill="#FF0000" name="Anomalies" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//             <p className="text-warning mt-2 small">⚠️ High-value anomalies from Feb–Mar 2024</p>
//           </div>

//           {/* News Feed */}
//           <div className="bg-secondary rounded p-3 shadow">
//             <p className="fw-semibold mb-3">📰 Finance News</p>
//             <div className="d-flex flex-column gap-2">
//               {financeNews.map((news, i) => (
//                 <div key={i} className="bg-dark p-2 rounded text-white-50">
//                   <p className="fw-medium text-white mb-1">{news.title}</p>
//                   <small className="text-muted">{news.source} • {news.time}</small>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { UserCircle, Sun, Moon } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Scatter,
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [rewardPoints, setRewardPoints] = useState(0);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false")
      .then(res => res.json())
      .then(data => setCryptoPrices(data));
  }, []);

  const seiAnomalies = [
    { date: '2024-02-15', price: 0.8799 },
    { date: '2024-02-16', price: 0.9323 },
    { date: '2024-02-17', price: 0.9335 },
    { date: '2024-02-18', price: 0.9079 },
    { date: '2024-02-19', price: 0.9638 },
    { date: '2024-02-20', price: 0.9227 },
    { date: '2024-02-21', price: 0.9348 },
    { date: '2024-02-22', price: 0.8757 },
    { date: '2024-02-25', price: 0.8587 },
    { date: '2024-02-27', price: 0.8904 },
    { date: '2024-02-28', price: 0.8901 },
    { date: '2024-02-29', price: 0.869 },
    { date: '2024-03-02', price: 0.8591 },
    { date: '2024-03-03', price: 0.8485 },
    { date: '2024-03-08', price: 0.9497 },
    { date: '2024-03-09', price: 0.9302 },
    { date: '2024-03-10', price: 0.9029 },
    { date: '2024-03-11', price: 0.8682 },
    { date: '2024-03-12', price: 0.8977 },
    { date: '2024-03-13', price: 0.9026 },
    { date: '2024-03-14', price: 0.8988 },
    { date: '2024-03-15', price: 0.8676 },
    { date: '2024-03-16', price: 1.0407 },
    { date: '2024-03-17', price: 0.8986 },
    { date: '2024-03-18', price: 0.9017 },
    { date: '2024-03-21', price: 0.8677 },
    { date: '2024-03-28', price: 0.8946 },
    { date: '2024-03-29', price: 0.8656 },
  ];

  const financeNews = [
    {
      title: "Bitcoin Surges Past $70K as ETFs Drive Demand",
      source: "CoinDesk",
      time: "2 hours ago",
      src :image,
      link: "https://www.coindesk.com/markets/2024/bitcoin-surges"
    },
    {
      title: "Federal Reserve Holds Rates Steady Amid Inflation Concerns",
      source: "Bloomberg",
      time: "5 hours ago",
      image: "https://source.unsplash.com/featured/?federal,reserve",
      link: "https://www.bloomberg.com/news/articles/2024-fed-rates"
    },
    {
      title: "Apple's Q2 Earnings Exceed Expectations",
      source: "CNBC",
      time: "Yesterday",
      image: "https://source.unsplash.com/featured/?apple,stock",
      link: "https://www.cnbc.com/2024/04/earnings/apple"
    },
    {
      title: "Oil Prices Decline as Supply Outpaces Demand",
      source: "Reuters",
      time: "2 days ago",
      image: "https://source.unsplash.com/featured/?oil",
      link: "https://www.reuters.com/markets/commodities/oil-prices"
    }
  ];

  // Manually added SEI Coin data
  const seiCoin = {
    id: "sei-coin",
    name: "SEI Coin",
    current_price: 1.05,
  };

  const themeClass = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';

  const handleEarnReward = () => {
    setRewardPoints(prevPoints => prevPoints + 10);
  };

  return (
    <div className={`min-vh-100 p-4 ${themeClass}`}>
      <div className="bg-primary rounded p-4 d-flex justify-content-between align-items-center mb-4 shadow">
        <h1 className="h4 fw-bold mb-0">Finance Dashboard</h1>
        <div className="d-flex gap-3 align-items-center">
          <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-light rounded-circle">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="rounded-circle bg-white d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
            <UserCircle className="text-primary" size={24} />
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Left Column */}
        <div className="col-12 col-md-6 d-flex flex-column gap-3">
          {/* SEI Anomalies Section */}
          <div className={`rounded p-3 shadow flex-grow-1 overflow-auto ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`} style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <p className="fw-semibold text-light mb-3">📌 SEI Anomalies</p>
            <div className="d-flex flex-column gap-2">
              {seiAnomalies.map((item, i) => (
                <div key={i} className={`p-2 rounded shadow-sm ${darkMode ? 'bg-dark text-white-50' : 'bg-white text-dark'}`} onClick={handleEarnReward}>
                  <p className="fw-medium mb-1">Close: ${item.price.toFixed(4)}</p>
                  <small className="text-muted">Date: {item.date}</small>
                </div>
              ))}
            </div>
          </div>

          <button className="btn btn-warning text-dark fw-semibold shadow" style={{ height: '50px', fontSize: '1.5rem' }}>Report</button>

          {/* Top Crypto Prices Section */}
          <div className={`rounded p-3 shadow ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
            <p className="fw-semibold mb-3">💹 Top Crypto Prices</p>
            <div className="d-flex flex-wrap gap-3 justify-content-start">
              {cryptoPrices.map((coin, index) => (
                <div key={index} className={`border rounded p-2 shadow-sm ${darkMode ? 'bg-dark text-white-50' : 'bg-white text-dark'}`} style={{ minWidth: '150px', maxWidth: '180px' }}>
                  <div className="fw-semibold">{coin.name}</div>
                  <div>${coin.current_price.toFixed(2)}</div>
                </div>
              ))}
              {/* Manually add SEI Coin */}
              <div className={`border rounded p-2 shadow-sm ${darkMode ? 'bg-dark text-white-50' : 'bg-white text-dark'}`} style={{ minWidth: '150px', maxWidth: '180px' }}>
                <div className="fw-semibold">{seiCoin.name}</div>
                <div>${seiCoin.current_price.toFixed(2)}</div>
              </div>
            </div>
          </div>

          {/* Rewards Section */}
          <div className={`rounded p-3 shadow ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
            <p className="fw-semibold mb-3">🏆 Rewards</p>
            <div className="d-flex flex-column gap-2">
              <div className="p-3 rounded shadow-sm" style={{ backgroundColor: darkMode ? '#444' : '#f8f9fa' }}>
                <p className="fw-medium">Your Reward Points: <strong>{rewardPoints}</strong></p>
                <p className="small text-muted">Earn points by interacting with anomalies and crypto prices.</p>
              </div>
              <button className="btn btn-warning" onClick={() => setRewardPoints(0)}>Claim Rewards</button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 d-flex flex-column gap-3">
          {/* SEI Price with Anomalies Section */}
          <div className={`rounded p-3 shadow ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
            <p className="fw-semibold mb-3">📈 SEI Price with Anomalies</p>
            <div style={{ height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seiAnomalies} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                  <XAxis dataKey="date" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" domain={[0.8, 1.1]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#00BFFF" strokeWidth={3} name="SEI Price" />
                  <Scatter data={seiAnomalies.filter(d => d.price > 0.95)} fill="#FF0000" name="Anomalies" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-danger mt-2 small">⚠️ High-value anomalies from Feb–Mar 2024</p>
          </div>

          {/* Finance News Section */}
          <div className={`rounded p-3 shadow ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
            <p className="fw-semibold mb-3">📰 Finance News</p>
            <div className="d-flex flex-row gap-3 overflow-auto">
              {financeNews.map((news, i) => (
                <div key={i} className={`rounded p-3 ${darkMode ? 'bg-dark' : 'bg-white'}`} style={{ minWidth: '250px', maxWidth: '250px', flexShrink: 0 }}>
                  <img src={news.image} alt="news" className="rounded mb-2" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <p className="fw-medium">{news.title}</p>
                  <small className="text-muted">{news.source} - {news.time}</small>
                  <div className="mt-2">
                    <a href={news.link} className="btn btn-link text-primary p-0" target="_blank" rel="noopener noreferrer">
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
