// ============================================================
// AUTH.JS — GovHealth Monitor User Authentication
// Handles: signup, login, session for Admin / Health Worker / Patient
// ============================================================

const AUTH_KEY = 'govhealth_users';

// ── DEFAULT USERS (pre-loaded) ───────────────────────────────
const DEFAULT_USERS = [
  // Admin (cannot self-register)
  { id:'admin_1', role:'admin',   name:'System Administrator', username:'admin',    password:'admin123', phone:'9000000001', village:'', district:'Hyderabad',      createdAt:'2025-01-01', active:true },
  // Health Workers
  { id:'hw_1',    role:'hw',      name:'Ravi Kumar',           username:'ravi.hw',  password:'hw123',    phone:'9100000001', village:'Secunderabad',  district:'Hyderabad',      createdAt:'2025-01-01', active:true },
  { id:'hw_2',    role:'hw',      name:'Priya Sharma',         username:'priya.hw', password:'hw123',    phone:'9100000002', village:'LB Nagar',      district:'Hyderabad',      createdAt:'2025-01-01', active:true },
  { id:'hw_3',    role:'hw',      name:'Suresh Reddy',         username:'suresh.hw',password:'hw123',    phone:'9100000003', village:'Hanamkonda',    district:'Warangal',       createdAt:'2025-01-01', active:true },
  // Patients
  { id:'pat_1',   role:'patient', name:'Lakshmi Devi',         username:'lakshmi',  password:'pat123',   phone:'9200000001', village:'Karimnagar',    district:'Karimnagar',     createdAt:'2025-01-01', active:true },
  { id:'pat_2',   role:'patient', name:'Ramaiah',              username:'ramaiah',  password:'pat123',   phone:'9200000002', village:'Nizamabad',     district:'Nizamabad',      createdAt:'2025-01-01', active:true },
];

// ── USER STORE ───────────────────────────────────────────────
function getUsers() {
  const stored = localStorage.getItem(AUTH_KEY);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(AUTH_KEY, JSON.stringify(DEFAULT_USERS));
  return DEFAULT_USERS;
}
function saveUsers(list) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(list));
}

// ── AUTH FUNCTIONS ───────────────────────────────────────────
function authLogin(username, password, role) {
  const users = getUsers();
  return users.find(u =>
    u.username === username.trim() &&
    u.password === password &&
    u.role === role &&
    u.active
  ) || null;
}

function authSignup(data) {
  // data: { role, name, username, password, phone, village, district }
  const users = getUsers();
  // Check username uniqueness
  if (users.find(u => u.username === data.username.trim())) {
    return { ok: false, msg: 'Username already taken. Please choose another.' };
  }
  const newUser = {
    id: data.role + '_' + Date.now(),
    role: data.role,
    name: data.name.trim(),
    username: data.username.trim(),
    password: data.password,
    phone: data.phone.trim(),
    village: data.village ? data.village.trim() : '',
    district: data.district ? data.district.trim() : '',
    createdAt: new Date().toLocaleDateString(),
    active: true
  };
  users.push(newUser);
  saveUsers(users);
  return { ok: true, user: newUser };
}

function getUserById(id) {
  return getUsers().find(u => u.id === id) || null;
}

function getAllHWs() {
  return getUsers().filter(u => u.role === 'hw');
}

// ── SESSION ──────────────────────────────────────────────────
function setSession(user) {
  sessionStorage.setItem('govhealth_role', user.role);
  sessionStorage.setItem('govhealth_user', JSON.stringify(user));
}
function getSession() {
  const u = sessionStorage.getItem('govhealth_user');
  return u ? JSON.parse(u) : null;
}
function getSessionRole() {
  return sessionStorage.getItem('govhealth_role') || null;
}
function clearSession() {
  sessionStorage.removeItem('govhealth_role');
  sessionStorage.removeItem('govhealth_user');
}
function requireRole(role) {
  const r = getSessionRole();
  if (!r || (role && r !== role)) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}
