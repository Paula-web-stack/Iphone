/* Reset un pamata stils */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background: #f4fdf7;
  color: #2c3e50;
  line-height: 1.6;
}

/* Konteiners */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Galvene */
header {
  background: #2e7d32;
  color: white;
  padding: 30px 0;
  text-align: center;
  border-bottom: 5px solid #1b5e20;
}

header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

header p {
  font-size: 1.2em;
  opacity: 0.9;
}

/* Ziedojumu bloki */
.tiers {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  justify-content: center;
}

.tier {
  background: white;
  border: 2px solid #c8e6c9;
  border-radius: 10px;
  padding: 25px;
  width: 280px;
  text-align: center;
  transition: 0.3s ease;
}

.tier:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.tier h2 {
  color: #388e3c;
  font-size: 1.8em;
  margin-bottom: 15px;
}

.tier p {
  margin-bottom: 20px;
  color: #555;
}

button.donate-btn {
  background: #66bb6a;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease;
}

button.donate-btn:hover {
  background: #558b2f;
}

/* Kājene */
footer {
  margin-top: 60px;
  text-align: center;
  font-size: 0.9em;
  color: #777;
}

