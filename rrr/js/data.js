// ============================================================
// DATA STORE — GovHealth Monitor (Telangana Edition)
// ============================================================

const HOSPITALS_KEY = 'govhealth_hospitals_tg';
const EMERGENCY_KEY = 'govhealth_emergency';
const PATIENTS_KEY  = 'govhealth_patients';
const HW_ALERTS_KEY = 'govhealth_hw_alerts';

// ── DEFAULT HOSPITALS (Telangana) ───────────────────────────
const DEFAULT_HOSPITALS = [
  { id:1, name:"Gandhi Hospital", location:"Secunderabad, Hyderabad", contact:"040-27505566", maps:"https://maps.google.com/?q=Gandhi+Hospital+Secunderabad", beds:{general:320,icu:48,emergency:40,maternity:60,pediatric:50,isolation:20,occupied:380,available:158}, equipment:{oxygen:120,ventilators:30,monitors:80,wheelchairs:40,stretchers:25,dialysis:8,xray:3,ctscan:2,mri:1,ecg:10}, staff:{doctors:45,nurses:120,surgeons:12,emergencyStaff:18,labTech:10,pharmacist:6,wardBoys:30}, emergency:{ambulances:8,bloodUnits:200,oxygenPlant:true,operationTheaters:6,traumaCenter:true,open247:true}, updated:new Date().toLocaleTimeString() },
  { id:2, name:"Osmania General Hospital", location:"Afzalgunj, Hyderabad", contact:"040-24600150", maps:"https://maps.google.com/?q=Osmania+General+Hospital+Hyderabad", beds:{general:280,icu:40,emergency:35,maternity:50,pediatric:40,isolation:15,occupied:340,available:120}, equipment:{oxygen:100,ventilators:25,monitors:70,wheelchairs:35,stretchers:20,dialysis:6,xray:3,ctscan:2,mri:1,ecg:8}, staff:{doctors:38,nurses:100,surgeons:10,emergencyStaff:15,labTech:8,pharmacist:5,wardBoys:25}, emergency:{ambulances:6,bloodUnits:180,oxygenPlant:true,operationTheaters:5,traumaCenter:true,open247:true}, updated:new Date().toLocaleTimeString() },
  { id:3, name:"Niloufer Hospital", location:"Red Hills, Hyderabad", contact:"040-23320121", maps:"https://maps.google.com/?q=Niloufer+Hospital+Hyderabad", beds:{general:160,icu:20,emergency:25,maternity:80,pediatric:90,isolation:10,occupied:270,available:115}, equipment:{oxygen:60,ventilators:15,monitors:40,wheelchairs:20,stretchers:12,dialysis:2,xray:2,ctscan:1,mri:0,ecg:5}, staff:{doctors:28,nurses:80,surgeons:8,emergencyStaff:10,labTech:6,pharmacist:4,wardBoys:18}, emergency:{ambulances:4,bloodUnits:100,oxygenPlant:true,operationTheaters:4,traumaCenter:false,open247:true}, updated:new Date().toLocaleTimeString() },
  { id:4, name:"GGH Warangal", location:"Warangal Urban, Warangal", contact:"0870-2577533", maps:"https://maps.google.com/?q=GGH+Warangal", beds:{general:200,icu:28,emergency:30,maternity:45,pediatric:35,isolation:12,occupied:260,available:90}, equipment:{oxygen:80,ventilators:18,monitors:55,wheelchairs:28,stretchers:16,dialysis:5,xray:2,ctscan:1,mri:0,ecg:7}, staff:{doctors:30,nurses:85,surgeons:8,emergencyStaff:12,labTech:7,pharmacist:4,wardBoys:20}, emergency:{ambulances:5,bloodUnits:140,oxygenPlant:true,operationTheaters:4,traumaCenter:true,open247:true}, updated:new Date().toLocaleTimeString() },
  { id:5, name:"District Hospital, Karimnagar", location:"Karimnagar, Karimnagar District", contact:"0878-2243600", maps:"https://maps.google.com/?q=District+Hospital+Karimnagar", beds:{general:150,icu:18,emergency:22,maternity:35,pediatric:28,isolation:8,occupied:180,available:81}, equipment:{oxygen:60,ventilators:12,monitors:40,wheelchairs:20,stretchers:12,dialysis:4,xray:2,ctscan:1,mri:0,ecg:5}, staff:{doctors:22,nurses:60,surgeons:6,emergencyStaff:9,labTech:5,pharmacist:3,wardBoys:15}, emergency:{ambulances:4,bloodUnits:100,oxygenPlant:true,operationTheaters:3,traumaCenter:false,open247:true}, updated:new Date().toLocaleTimeString() },
  { id:6, name:"Government Hospital, Nizamabad", location:"Nizamabad, Nizamabad District", contact:"08462-226000", maps:"https://maps.google.com/?q=Government+Hospital+Nizamabad", beds:{general:120,icu:14,emergency:18,maternity:30,pediatric:22,isolation:6,occupied:150,available:60}, equipment:{oxygen:50,ventilators:10,monitors:30,wheelchairs:15,stretchers:10,dialysis:3,xray:1,ctscan:1,mri:0,ecg:4}, staff:{doctors:18,nurses:50,surgeons:4,emergencyStaff:8,labTech:4,pharmacist:2,wardBoys:12}, emergency:{ambulances:3,bloodUnits:80,oxygenPlant:false,operationTheaters:2,traumaCenter:false,open247:true}, updated:new Date().toLocaleTimeString() },
  { id:7, name:"Area Hospital, Khammam", location:"Khammam, Khammam District", contact:"08742-222100", maps:"https://maps.google.com/?q=Area+Hospital+Khammam", beds:{general:100,icu:12,emergency:15,maternity:25,pediatric:18,isolation:5,occupied:120,available:55}, equipment:{oxygen:40,ventilators:8,monitors:25,wheelchairs:12,stretchers:8,dialysis:2,xray:1,ctscan:0,mri:0,ecg:3}, staff:{doctors:14,nurses:40,surgeons:3,emergencyStaff:6,labTech:3,pharmacist:2,wardBoys:10}, emergency:{ambulances:2,bloodUnits:60,oxygenPlant:false,operationTheaters:2,traumaCenter:false,open247:true}, updated:new Date().toLocaleTimeString() },
  { id:8, name:"Government Hospital, Nalgonda", location:"Nalgonda, Nalgonda District", contact:"08682-222200", maps:"https://maps.google.com/?q=Government+Hospital+Nalgonda", beds:{general:90,icu:10,emergency:12,maternity:20,pediatric:15,isolation:4,occupied:100,available:51}, equipment:{oxygen:35,ventilators:6,monitors:20,wheelchairs:10,stretchers:6,dialysis:2,xray:1,ctscan:0,mri:0,ecg:3}, staff:{doctors:12,nurses:35,surgeons:3,emergencyStaff:5,labTech:3,pharmacist:2,wardBoys:8}, emergency:{ambulances:2,bloodUnits:50,oxygenPlant:false,operationTheaters:1,traumaCenter:false,open247:true}, updated:new Date().toLocaleTimeString() },
  { id:9, name:"CHC Mahbubnagar", location:"Mahbubnagar, Mahbubnagar District", contact:"08542-222350", maps:"https://maps.google.com/?q=CHC+Mahbubnagar", beds:{general:70,icu:8,emergency:10,maternity:18,pediatric:12,isolation:3,occupied:80,available:41}, equipment:{oxygen:28,ventilators:5,monitors:16,wheelchairs:8,stretchers:5,dialysis:1,xray:1,ctscan:0,mri:0,ecg:2}, staff:{doctors:10,nurses:28,surgeons:2,emergencyStaff:4,labTech:2,pharmacist:1,wardBoys:7}, emergency:{ambulances:2,bloodUnits:40,oxygenPlant:false,operationTheaters:1,traumaCenter:false,open247:false}, updated:new Date().toLocaleTimeString() },
  { id:10, name:"PHC Medak", location:"Medak, Medak District", contact:"08452-222100", maps:"https://maps.google.com/?q=PHC+Medak", beds:{general:30,icu:4,emergency:5,maternity:10,pediatric:6,isolation:2,occupied:30,available:27}, equipment:{oxygen:15,ventilators:2,monitors:8,wheelchairs:4,stretchers:3,dialysis:0,xray:1,ctscan:0,mri:0,ecg:1}, staff:{doctors:5,nurses:14,surgeons:1,emergencyStaff:2,labTech:1,pharmacist:1,wardBoys:4}, emergency:{ambulances:1,bloodUnits:20,oxygenPlant:false,operationTheaters:0,traumaCenter:false,open247:false}, updated:new Date().toLocaleTimeString() }
];

// ── SCHEMES ──────────────────────────────────────────────────
const SCHEMES = [
  {id:1,category:'telangana',topics:['insurance','serious'],icon:'fa-heart-pulse',color:'#C62828',name:'Rajiv Aarogyasri',nameTE:'రాజీవ్ ఆరోగ్యశ్రీ',description:'Flagship scheme providing cashless treatment up to ₹5 lakhs/year for BPL families.',eligibility:'BPL families with white ration card. Income below ₹5 lakhs.',benefits:'Free treatment ₹5 lakhs/year. 3,000+ procedures.',documents:'White Ration Card, Aadhaar, Income Certificate',howToApply:'Visit empanelled hospital with white ration card.',helpline:'104 / 1800-425-104'},
  {id:2,category:'telangana',topics:['insurance','women'],icon:'fa-person-cane',color:'#6A1B9A',name:'Cheyutha Scheme',nameTE:'చేయూత పథకం',description:'₹10,000/year to SC/ST/BC/Minority women above 57 years.',eligibility:'Women 57+ from SC/ST/BC/Minority. Income below ₹1.5 lakhs.',benefits:'₹10,000/year DBT for healthcare.',documents:'Aadhaar, Caste Certificate, Age Proof, Bank Account',howToApply:'Apply at MeeSeva center.',helpline:'1800-425-8008'},
  {id:3,category:'telangana',topics:['medicines','rural'],icon:'fa-microscope',color:'#00695C',name:'Telangana Diagnostics',nameTE:'తెలంగాణ డయాగ్నొస్టిక్స్',description:'Free diagnostic services at all government hospitals.',eligibility:'All Telangana citizens.',benefits:'70+ free tests at 600+ facilities.',documents:'Aadhaar, Doctor prescription',howToApply:'Visit any government hospital.',helpline:'104'},
  {id:4,category:'telangana',topics:['rural','medicines'],icon:'fa-house-medical',color:'#1565C0',name:'Basti Dawakhana',nameTE:'బస్తీ దవాఖాన',description:'Urban health centers with free OPD and medicines.',eligibility:'Urban residents, slum dwellers.',benefits:'Free OPD, medicines, diagnostics.',documents:'Aadhaar or residence proof.',howToApply:'Walk-in at nearest Basti Dawakhana.',helpline:'040-23450101'},
  {id:5,category:'telangana',topics:['rural','medicines'],icon:'fa-tree',color:'#2E7D32',name:'Palle Dawakhana',nameTE:'పల్లె దవాఖాన',description:'Rural health centers with free treatment.',eligibility:'All rural Telangana residents.',benefits:'Free medicines, OPD, diagnostics.',documents:'Aadhaar or ration card.',howToApply:'Visit nearest Palle Dawakhana.',helpline:'104'},
  {id:6,category:'telangana',topics:['women'],icon:'fa-apple-whole',color:'#F57C00',name:'Arogya Lakshmi',nameTE:'ఆరోగ్య లక్ష్మి',description:'Free nutritious meals to pregnant and lactating mothers.',eligibility:'Pregnant women and lactating mothers.',benefits:'Free nutritious meals daily.',documents:'MCH Card, Aadhaar, Ration Card',howToApply:'Register at nearest Anganwadi.',helpline:'1800-425-8008'},
  {id:7,category:'telangana',topics:['women','children'],icon:'fa-baby',color:'#7B1FA2',name:'KCR Kit Scheme',nameTE:'కేసీఆర్ కిట్ పథకం',description:'Free kit worth ₹12,000 for mothers delivering in government hospitals.',eligibility:'All women delivering in government hospitals.',benefits:'Kit + ₹1,000 cash incentive.',documents:'Aadhaar, MCH Card, Bank Account',howToApply:'Deliver at government hospital.',helpline:'104'},
  {id:8,category:'telangana',topics:['serious'],icon:'fa-droplet',color:'#0277BD',name:'Telangana Dialysis Scheme',nameTE:'తెలంగాణ డయాలసిస్ పథకం',description:'Free dialysis services at government hospitals.',eligibility:'CKD/ESRD patients, BPL priority.',benefits:'Free dialysis sessions, consumables free.',documents:'Medical records, Aadhaar, BPL Card',howToApply:'Get referral from government doctor.',helpline:'104'},
  {id:9,category:'telangana',topics:['women','serious'],icon:'fa-venus',color:'#E91E63',name:'Arogya Mahila',nameTE:'ఆరోగ్య మహిళ',description:'Women healthcare scheme covering maternal health and cancer screening.',eligibility:'All women in Telangana.',benefits:'Free gynecology OPD, cancer screening.',documents:'Aadhaar, Ration Card',howToApply:'Visit government hospital gynecology dept.',helpline:'104'},
  {id:10,category:'telangana',topics:['children'],icon:'fa-child',color:'#FF6F00',name:'RBSK (Child Health)',nameTE:'బాల స్వాస్థ్య కార్యక్రమం',description:'Child health screening for children 0-18 years.',eligibility:'All children 0-18 years.',benefits:'Free screening and treatment up to ₹1 lakh.',documents:'Birth Certificate, School ID',howToApply:'RBSK teams visit schools/Anganwadis.',helpline:'104'},
  {id:11,category:'central',topics:['insurance'],icon:'fa-star',color:'#1565C0',name:'Ayushman Bharat – PM-JAY',nameTE:'ఆయుష్మాన్ భారత్',description:'₹5 lakh health cover per family per year.',eligibility:'SECC 2011 families, poor rural families.',benefits:'₹5 lakh/family/year, 1500+ procedures.',documents:'Aadhaar, Ration Card, PMJAY card',howToApply:'Visit CSC or empanelled hospital.',helpline:'14555 / 1800-111-565'},
  {id:12,category:'central',topics:['rural','medicines'],icon:'fa-notes-medical',color:'#2E7D32',name:'National Health Mission',nameTE:'జాతీయ ఆరోగ్య మిషన్',description:'Comprehensive primary healthcare mission.',eligibility:'All citizens, BPL priority.',benefits:'Free OPD, medicines, immunization.',documents:'Any ID proof',howToApply:'Visit any government hospital.',helpline:'1800-180-1104'},
  {id:13,category:'central',topics:['women'],icon:'fa-baby-carriage',color:'#9C27B0',name:'Janani Suraksha Yojana',nameTE:'జనని సురక్షా యోజన',description:'Cash incentive for institutional delivery.',eligibility:'BPL pregnant women.',benefits:'₹1,400 cash (rural), ₹1,000 (urban).',documents:'Aadhaar, BPL Card, MCH Card',howToApply:'Register at ANM/ASHA during pregnancy.',helpline:'104'},
  {id:14,category:'central',topics:['medicines'],icon:'fa-pills',color:'#00695C',name:'PM Jan Aushadhi Scheme',nameTE:'జన్ ఔషధి పథకం',description:'Generic medicines at 50-90% discount.',eligibility:'All citizens with doctor prescription.',benefits:'1,900+ medicines at subsidized prices.',documents:"Doctor's prescription only",howToApply:'Visit nearest Jan Aushadhi Kendra.',helpline:'1800-180-8080'},
  {id:15,category:'central',topics:['serious'],icon:'fa-droplet',color:'#0277BD',name:'National Dialysis Programme',nameTE:'జాతీయ డయాలసిస్ కార్యక్రమం',description:'Free dialysis for poor CKD patients.',eligibility:'CKD patients with BPL card.',benefits:'Free dialysis sessions at district hospitals.',documents:'Medical records, BPL Card',howToApply:'Get referral from government nephrologist.',helpline:'1800-180-1104'},
  {id:16,category:'central',topics:['children'],icon:'fa-syringe',color:'#43A047',name:'Universal Immunization Programme',nameTE:'సార్వత్రిక టీకా కార్యక్రమం',description:'Free vaccination for children 0-5 years.',eligibility:'All children 0-5 years and pregnant women.',benefits:'12 vaccines free.',documents:'MCH/Child Health Card',howToApply:'Visit nearest PHC on vaccination day.',helpline:'1800-180-1104'},
  {id:17,category:'central',topics:['serious'],icon:'fa-lungs-virus',color:'#5D4037',name:'TB Free India – PMTBI',nameTE:'టీబీ ముక్త భారత్',description:'Free TB diagnosis, treatment and nutritional support.',eligibility:'All TB patients across India.',benefits:'Free DOTS treatment, ₹500/month nutrition support.',documents:'Aadhaar, Bank Account',howToApply:'Visit any government hospital with cough symptoms.',helpline:'1800-11-6666'},
  {id:18,category:'central',topics:['insurance'],icon:'fa-building-columns',color:'#37474F',name:'CGHS',nameTE:'కేంద్ర ప్రభుత్వ ఆరోగ్య పథకం',description:'Healthcare for Central Government employees.',eligibility:'Central Government employees and pensioners.',benefits:'Comprehensive medical cover.',documents:'CGHS Card, Aadhaar, Employee ID',howToApply:'Enroll at nearest CGHS wellness center.',helpline:'1800-11-4477'},
  {id:19,category:'central',topics:['insurance'],icon:'fa-industry',color:'#0D47A1',name:'ESI Scheme',nameTE:'ఉద్యోగి రాష్ట్ర బీమా పథకం',description:'Social security for organised sector workers.',eligibility:'Workers earning ≤₹21,000/month.',benefits:'Free medical, sickness benefit, maternity benefit.',documents:'ESI Card, Aadhaar',howToApply:'Employer registers with ESIC.',helpline:'1800-11-2526'}
];

const TOPIC_META = {
  insurance:{ label:'Health Insurance & Financial Support', icon:'fa-shield-heart', color:'#1565C0' },
  women:    { label:'Women & Pregnancy Health',             icon:'fa-venus',         color:'#E91E63' },
  children: { label:'Children Health',                      icon:'fa-child',          color:'#FF6F00' },
  rural:    { label:'Rural & Primary Healthcare',           icon:'fa-tree',           color:'#2E7D32' },
  medicines:{ label:'Low-Cost Medicines & Diagnostics',     icon:'fa-pills',          color:'#00695C' },
  serious:  { label:'Serious Disease Treatment',            icon:'fa-heart-pulse',    color:'#C62828' }
};

// ── HOSPITAL FUNCTIONS ───────────────────────────────────────
function getHospitals(){const s=localStorage.getItem(HOSPITALS_KEY);if(s)return JSON.parse(s);localStorage.setItem(HOSPITALS_KEY,JSON.stringify(DEFAULT_HOSPITALS));return DEFAULT_HOSPITALS;}
function saveHospitals(d){localStorage.setItem(HOSPITALS_KEY,JSON.stringify(d));}
function addHospital(h){const l=getHospitals();h.id=Date.now();h.updated=new Date().toLocaleTimeString();l.push(h);saveHospitals(l);}
function updateHospital(id,u){const l=getHospitals();const i=l.findIndex(h=>h.id==id);if(i>-1){l[i]={...l[i],...u,updated:new Date().toLocaleTimeString()};saveHospitals(l);}}
function deleteHospital(id){saveHospitals(getHospitals().filter(h=>h.id!=id));}

// ── EMERGENCY / SOS ──────────────────────────────────────────
function getEmergencyRequests(){return JSON.parse(localStorage.getItem(EMERGENCY_KEY)||'[]');}
function saveEmergencyRequest(req){
  const list=getEmergencyRequests();
  req.id=Date.now(); req.timestamp=new Date().toLocaleString(); req.status='Pending';
  req.statusHistory=[{status:'Pending',by:'System',at:new Date().toLocaleString()}];
  list.unshift(req); localStorage.setItem(EMERGENCY_KEY,JSON.stringify(list)); return req;
}
function updateSOSStatus(id,status,byName){
  const list=getEmergencyRequests(); const i=list.findIndex(r=>r.id==id);
  if(i>-1){list[i].status=status;if(!list[i].statusHistory)list[i].statusHistory=[];list[i].statusHistory.push({status,by:byName,at:new Date().toLocaleString()});}
  localStorage.setItem(EMERGENCY_KEY,JSON.stringify(list));
}
function markRequestDone(id){updateSOSStatus(id,'Completed','Admin');}

// ── PATIENT CRUD ─────────────────────────────────────────────
function getPatients(){return JSON.parse(localStorage.getItem(PATIENTS_KEY)||'[]');}

function savePatient(p){
  const l=getPatients();
  p.id=Date.now(); p.createdAt=new Date().toLocaleString();
  p.medicineLog=[]; p.checkupLog=[]; p.adherenceStreak=0;
  // Ensure medicines array always exists
  if(!p.medicines||!p.medicines.length){
    p.medicines = p.medicine ? [{name:p.medicine,freq:p.medFreq||'Daily Once',time:p.medTime||'08:00',notes:p.medNotes||''}] : [];
  }
  l.unshift(p); localStorage.setItem(PATIENTS_KEY,JSON.stringify(l)); return p;
}

function updatePatientFull(id, updates){
  const l=getPatients(); const i=l.findIndex(p=>p.id==id);
  if(i>-1){
    l[i]={...l[i],...updates};
    // Keep medicines array and single medicine field in sync
    if(updates.medicines && updates.medicines.length){
      const first=updates.medicines[0];
      l[i].medicine=first.name; l[i].medFreq=first.freq; l[i].medTime=first.time; l[i].medNotes=first.notes||'';
    }
    localStorage.setItem(PATIENTS_KEY,JSON.stringify(l));
  }
}

/**
 * getMedicinesList — always returns an array of medicine objects
 * Supports both old single-medicine patients and new multi-medicine patients
 */
function getMedicinesList(p){
  if(p.medicines && p.medicines.length > 0) return p.medicines;
  if(p.medicine) return [{name:p.medicine, freq:p.medFreq||'Daily Once', time:p.medTime||'08:00', notes:p.medNotes||''}];
  return [];
}

// ── PER-MEDICINE LOG FUNCTIONS ───────────────────────────────
/**
 * logMedicineForDrug — logs status for ONE specific medicine by index
 * Key: date + medicineIndex — one entry per medicine per day
 * @param {number} pid  - patient id
 * @param {number} medIdx - index in patient.medicines[] array
 * @param {string} medName - medicine name (for display)
 * @param {string} status - 'Taken'|'Missed'|'Auto-Missed'
 * @param {string} by - 'Patient'|'HW'|'System'
 */
function logMedicineForDrug(pid, medIdx, medName, status, by){
  by = by || 'Patient';
  const l = getPatients();
  const i = l.findIndex(p => p.id == pid);
  if(i === -1) return;
  if(!l[i].medicineLog) l[i].medicineLog = [];
  const today = new Date().toDateString();
  const key = today + '_med_' + medIdx;
  // Remove existing entry for this medicine today
  l[i].medicineLog = l[i].medicineLog.filter(e => e.dayMedKey !== key);
  l[i].medicineLog.unshift({
    date: new Date().toLocaleString(),
    rawDate: new Date().toISOString(),
    dayMedKey: key,
    dateKey: today,
    medIdx: medIdx,
    medicineName: medName,
    status: status,
    by: by
  });
  // Recalculate adherence streak based on all medicines taken today
  const todayEntries = l[i].medicineLog.filter(e => e.dateKey === today);
  const allTaken = todayEntries.length > 0 && todayEntries.every(e => e.status === 'Taken');
  if(allTaken) l[i].adherenceStreak = (l[i].adherenceStreak || 0) + 1;
  else if(status === 'Missed' || status === 'Auto-Missed') l[i].adherenceStreak = 0;
  localStorage.setItem(PATIENTS_KEY, JSON.stringify(l));
}

/**
 * logMedicine — backwards compatible: logs for the first medicine only
 * Used by HW dashboard "quick" Taken/Missed buttons
 */
function logMedicine(pid, status, by){
  by = by || 'Patient';
  const p = getPatients().find(x => x.id == pid);
  if(!p) return;
  const meds = getMedicinesList(p);
  if(meds.length === 0) return;
  // Log for ALL medicines if called globally (HW quick action)
  meds.forEach(function(m, idx){
    logMedicineForDrug(pid, idx, m.name, status, by);
  });
}

/**
 * getTodayMedStatus — returns status for a specific medicine today
 * If medIdx is omitted, returns first medicine's status
 */
function getTodayMedStatusForDrug(p, medIdx){
  const today = new Date().toDateString();
  const key = today + '_med_' + medIdx;
  const entry = (p.medicineLog || []).find(e => e.dayMedKey === key);
  return entry ? entry.status : null;
}

/**
 * autoMissForDrug — called by system when 2h window expires
 */
function autoMissForDrug(pid, medIdx, medName){
  const p = getPatients().find(x => x.id == pid);
  if(!p) return;
  const existing = getTodayMedStatusForDrug(p, medIdx);
  if(existing === 'Taken') return; // already taken, do nothing
  if(existing) return; // already logged
  logMedicineForDrug(pid, medIdx, medName, 'Auto-Missed', 'System');
  // Send HW alert
  sendHWAlert(p.hwId, pid, p.name, 'med_missed',
    p.name + ' did not take ' + medName + ' — Auto marked Missed');
}

// ── CHECKUP LOG ───────────────────────────────────────────────
function logCheckup(pid, status, by){
  by = by || 'Patient';
  const l = getPatients(); const i = l.findIndex(p => p.id == pid);
  if(i > -1){
    if(!l[i].checkupLog) l[i].checkupLog = [];
    l[i].checkupLog.unshift({date:new Date().toLocaleString(), rawDate:new Date().toISOString(), status, by});
    if(status === 'Done'){
      const freq = l[i].checkupFreq || 'Monthly';
      const next = new Date();
      if(freq === 'Weekly') next.setDate(next.getDate()+7);
      else if(freq === 'Monthly') next.setMonth(next.getMonth()+1);
      else if(freq === 'Every 3 Months') next.setMonth(next.getMonth()+3);
      else if(freq === 'Every 6 Months') next.setMonth(next.getMonth()+6);
      l[i].checkupDate = next.toISOString().split('T')[0];
    }
    localStorage.setItem(PATIENTS_KEY, JSON.stringify(l));
  }
}

function autoMissCheckup(pid){
  const p = getPatients().find(x => x.id == pid);
  if(!p) return;
  const cl = p.checkupLog || [];
  const today = new Date().toDateString();
  const todayEntry = cl.find(e => new Date(e.rawDate).toDateString() === today);
  if(todayEntry) return;
  logCheckup(pid, 'Auto-Missed', 'System');
  sendHWAlert(p.hwId, pid, p.name, 'checkup_missed', p.name + ' missed checkup scheduled for ' + p.checkupDate);
}

// ── HW ALERT SYSTEM ───────────────────────────────────────────
function sendHWAlert(hwId, patientId, patientName, type, msg){
  const list = JSON.parse(localStorage.getItem(HW_ALERTS_KEY) || '[]');
  list.unshift({hwId, patientId, patientName, type, msg, at: new Date().toLocaleString(), read: false});
  localStorage.setItem(HW_ALERTS_KEY, JSON.stringify(list));
}

// ── ADHERENCE ─────────────────────────────────────────────────
function getAdh(p){
  const l = p.medicineLog || [];
  if(!l.length) return {pct:0, streak:p.adherenceStreak||0};
  // Count unique days in last 30 entries where all meds were taken
  const recent = l.slice(0, 60);
  const dayMap = {};
  recent.forEach(function(e){
    if(!dayMap[e.dateKey]) dayMap[e.dateKey] = {total:0, taken:0};
    dayMap[e.dateKey].total++;
    if(e.status === 'Taken') dayMap[e.dateKey].taken++;
  });
  const days = Object.values(dayMap).slice(0, 30);
  const takenDays = days.filter(function(d){ return d.taken > 0 && d.taken === d.total; }).length;
  const pct = days.length > 0 ? Math.round(takenDays / days.length * 100) : 0;
  return {pct, streak: p.adherenceStreak || 0};
}

// ── SCHEMES ───────────────────────────────────────────────────
function getSchemes(category, topic){
  let s = SCHEMES;
  if(category) s = s.filter(x => x.category === category);
  if(topic) s = s.filter(x => x.topics && x.topics.includes(topic));
  return s;
}

// ── LIVE UPDATE SIMULATION ────────────────────────────────────
function simulateLiveUpdate(){
  const l = getHospitals();
  l.forEach(h=>{
    h.beds.available=Math.max(0,h.beds.available+Math.floor(Math.random()*5)-2);
    h.beds.occupied=Math.max(0,h.beds.occupied+Math.floor(Math.random()*4)-2);
    h.beds.icu=Math.max(0,h.beds.icu+Math.floor(Math.random()*3)-1);
    h.equipment.oxygen=Math.max(0,h.equipment.oxygen+Math.floor(Math.random()*4)-2);
    h.emergency.ambulances=Math.max(0,h.emergency.ambulances+Math.floor(Math.random()*2)-1);
    h.updated=new Date().toLocaleTimeString();
  });
  saveHospitals(l);
}

// ── SHARED HELPER FUNCTIONS ───────────────────────────────────
// Medicine list — supports both multi-medicine array and legacy single medicine
function getMedicinesList(p) {
  if (p.medicines && p.medicines.length > 0) return p.medicines;
  if (p.medicine) return [{name: p.medicine, freq: p.medFreq || 'Daily Once', time: p.medTime || '08:00', notes: p.medNotes || ''}];
  return [];
}

// Adherence stats from medicine log (last 30 entries)
function getAdh(p) {
  var log = p.medicineLog || [];
  if (!log.length) return {pct: 0, streak: 0};
  var recent = log.slice(0, 30);
  var taken = recent.filter(function(x){ return x.status === 'Taken'; }).length;
  return {pct: Math.round(taken / recent.length * 100), streak: p.adherenceStreak || 0};
}

// Today's medicine status for a specific medicine index
function getTodayMedStatusForDrug(p, idx) {
  var today = new Date().toDateString();
  var log = p.medicineLog || [];
  var entry = log.find(function(l) {
    return new Date(l.rawDate || l.date).toDateString() === today && (l.medicineIdx === idx || idx === 0);
  });
  return entry ? entry.status : null;
}



