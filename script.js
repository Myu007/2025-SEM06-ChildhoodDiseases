const questions = [
  {
    question: "Normal secretion of the pepsin equals: ",
    answers: [
      { text: "25-35 mg/h", correct: true },
      { text: "2,5-3,5 mg/h", correct: false },
      { text: "10-15 mg/h", correct: false },
      { text: "250-350 mg/h", correct: false },
      { text: "100-150 mg/h", correct: false },
    ],
  },
  {
    question: "Which hormone of the digestive tract suppresses the secretion and motility of the stomach?",
    answers: [
      { text: "secretin", correct: true },
      { text: "gastrin    ", correct: false },
      { text: "chymosin", correct: false },
      { text: "cholecystokinin", correct: false },
      { text: "somatostatin   ", correct: false },
    ],
  },
  {
    question: "A congenital defect of the esophagus is the:",
    answers: [
      { text: "esophageal-tracheal fistula", correct: true },
      { text: "esophageal-gastric fistula   ", correct: false },
      { text: "erosion of the esophagus", correct: false },
      { text: "esophageal-intestinal fistula", correct: false },
      { text: "esophageal-bronchial fistula", correct: false },
    ],
  },
  {
    question: "How is dietary carbohydrate digested? ",
    answers: [
      { text: "It’s broken into monosaccharide by amilase", correct: true },
      { text: "It’s broken into amino acids by hydrolysis   ", correct: false },
      { text: "It’s broken into simple sugars by sucrose", correct: false },
      { text: "It’s broken into simple sugars by reductase ", correct: false },
      { text: "It’s broken into monosaccharide by chymotrypsin", correct: false },
    ],
  },
  {
    question: "How is dietary fat digested? ",
    answers: [
      { text: "It’s broken into monoglycerides and fatty acids by pancreatic lipase", correct: true },
      { text: "It’s broken into amino acids by hydrolysis   ", correct: false },
      { text: "It’s broken into monoglycerides and fatty acids by hydrolysis", correct: false },
      { text: "It’s broken into monoglycerides and fatty acids by entrokinase ", correct: false },
      { text: "It’s broken into monoglycerides and fatty acids by bile acids", correct: false },
    ],
  },
  {
    question: "How is dietary protein digested? ",
    answers: [
      { text: "It’s broken into polypeptides by trypsin", correct: true },
      { text: "It’s broken into amino acids by gastrin  ", correct: false },
      { text: "It’s broken into polypeptides by hydrochloric acid ", correct: false },
      { text: "It’s broken into amino acids by bile acids", correct: false },
      { text: "It’s broken into polypeptides by reductase", correct: false },
    ],
  },
  {
    question: "Fat emulsification occurs under the influence of the: ",
    answers: [
      { text: "bile acids", correct: true },
      { text: "stomach acid  ", correct: false },
      { text: "duodenum bicarbonates", correct: false },
      { text: "lipase", correct: false },
      { text: "amylase", correct: false },
    ],
  },
  {
    question: "One of the main symptom of the Pyloric stenosis is:",
    answers: [
      { text: "vomiting with food eaten the day before", correct: true },
      { text: " pain in the right hypochondrium", correct: false },
      { text: " persistent vomiting that does not bring relief", correct: false },
      { text: "refractory vomiting", correct: false },
      { text: "vomiting with undigested food", correct: false },
    ],
  },
  {
    question: "Pyloric stenosis is manifested by: ",
    answers: [
      { text: "vomiting with food eaten the day before", correct: true },
      { text: "pain in the right hypochondrium", correct: false },
      { text: "persistent vomiting that does not bring relief", correct: false },
      { text: "refractory vomiting", correct: false },
      { text: "vomiting with undigested food ", correct: false },
    ],
  },
  {
    question: "Low acidity of gastric juice contributes to:",
    answers: [
      { text: "impaired hydrolysis of proteins ", correct: true },
      { text: "impaired hydrolysis of carbohydrates ", correct: false },
      { text: "weakening motility of the GIT ", correct: false },
      { text: "impaired hydrolysis of fats ", correct: false },
      { text: "impaired hydrolysis of triglycerides ", correct: false },
    ],
  },
  {
    question: "What pathology is characterized by a large amount of neutral fat in the feces? ",
    answers: [
      { text: "chronic pancreatitis  ", correct: true },
      { text: "lactase deficiency", correct: false },
      { text: "enterocolitis", correct: false },
      { text: "chronic gastritis", correct: false },
      { text: "exudative enteropathy ", correct: false },
    ],
  },
  {
    question: "One of the specific symptom for the chronic gastritis is the: ",
    answers: [
      { text: "halitosis  ", correct: true },
      { text: "severe atrophy of the muscles of the limbs  ", correct: false },
      { text: "enlarged abdomen", correct: false },
      { text: " \"spider veins\" on the skin", correct: false },
      { text: "\"medusa head\" on the abdomen", correct: false },
    ],
  },
  {
    question: "Disseminated pneumonia is mostly caused by ",
    answers: [
      { text: "Viral infection", correct: true },
      { text: "Gram-positive infection", correct: false },
      { text: "Gram-negative infection", correct: false },
      { text: "Protozoal infection ", correct: false },
      { text: "Paracytic infection", correct: false },
    ],
  },
  {
    question: "Signs of hypoventilation are:",
    answers: [
      { text: "hypoxemia and hypercapnia", correct: true },
      { text: "hypoxemia and alkalosis", correct: false },
      { text: "hypercapnia and alkalosis", correct: false },
      { text: "hypoxemia and glucosuria", correct: false },
      { text: "acidosis and hypocapnia", correct: false },
    ],
  },
  {
    question: "Restrictive lung disorders are characterized by:",
    answers: [
      { text: "decreased lung volumes", correct: true },
      { text: "increased flow-resistance", correct: false },
      { text: "bronchoconstriction", correct: false },
      { text: "abnormally low airflow", correct: false },
      { text: "narrowed airways", correct: false },
    ],
  },
  {
    question: "Enlargement of the air spaces and destruction of acinus is called",
    answers: [
      { text: "emphysema", correct: true },
      { text: "pneumonia", correct: false },
      { text: "atelectasis", correct: false },
      { text: "pneumothorax", correct: false },
      { text: "bronchiectasis", correct: false },
    ],
  },
  {
    question: "What respiratory disease is most common accompanied by wheezing ?",
    answers: [
      { text: "Acute bronchiolitis", correct: true },
      { text: "Acute rhinitis", correct: false },
      { text: "Acute sinusitis", correct: false },
      { text: "Virul croup", correct: false },
      { text: "Acute pneumonia", correct: false },
    ],
  },
  {
    question: " Complication of hyperventilation is a:",
    answers: [
      { text: "respiratory alkalosis", correct: true },
      { text: "respiratory acidosis", correct: false },
      { text: "combined acidosis", correct: false },
      { text: "metabolic acidosis", correct: false },
      { text: "metabolic alkalosis", correct: false },
    ],
  },
  {
    question: "The most common localisation of  the pulmonary atelectasis is in:",
    answers: [
      { text: "right upper lobe", correct: true },
      { text: "left upper lobe ", correct: false },
      { text: "left lower lobe", correct: false },
      { text: "right lower lobe", correct: false },
      { text: "right middle lobe", correct: false },
    ],
  },
  {
    question: "A 4 months old boy presents with complaints of cough, sub febrile fever, wheezing. Sick 4th day. On examination, lower chest indrawing, respiratory rate of 56/ min. Auscultation-rales, expiration is prolonged. Three times giving salbumatol within an hour did not give a positive result.Which of the following is the most likely diseases?",
    answers: [
      { text: "Bronchiolitis", correct: true },
      { text: "Pharyngitis", correct: false },
      { text: "Laryngitis", correct: false },
      { text: "Bronchitis", correct: false },
      { text: "Pneumonia", correct: false },
    ],
  },
  {
    question: "A 9 months old baby is brought to emergency with acute onset (suddenly) of cough, wheezing, dispnea, acrocyanosis. Which of the following is the most appropriate management?",
    answers: [
      { text: "Rigit bronchoscopy", correct: true },
      { text: "Flexisible endoscopy", correct: false },
      { text: "Transbronchial biopsy ", correct: false },
      { text: "Direct laryngoscopy", correct: false },
      { text: "Medical thoracoscopy", correct: false },
    ],
  },
  {
    question: "A 11-year-old child presents with fever, cough and wheezing. The child ill 4 days. On examination respiratory rate 30/min, dry cough, wheeze, fever 37,4˚C. CXR shows bilateral hyperinflation with normal WBC count. Which of the following is the most appropriate initial management?",
    answers: [
      { text: "Short acting β2 agonist", correct: true },
      { text: "Penicillin group antibiotic", correct: false },
      { text: "Aminophiline", correct: false },
      { text: "Inhaled steroid", correct: false },
      { text: "Long acting β2 agonist", correct: false },
    ],
  },
  {
    question: "A 3-year-old child presents with high fever, sore throat, cough. The child ill second day. Early spring. On examination, temperature was 39,5˚C, dry cough, sore throat, muscle pain, weakness. Which of the following is the most appropriate dosage paracetamol?",
    answers: [
      { text: "15mg/kg", correct: true },
      { text: "45mg/kg", correct: false },
      { text: "30 mg/kg", correct: false },
      { text: "1mg/kg", correct: false },
      { text: "5 mg/kg", correct: false },
    ],
  },
  {
    question: "24 month-old child presents with severe respiratory distress and central cyanosis. Saturation of oxygen 89%. On examination respiratory rate 58/min., temperature 38,9C, severy lower chest indrawing. Which of the following is the most common diseases in this child?",
    answers: [
      { text: "Severe pneumonia", correct: true },
      { text: "Severe asthma", correct: false },
      { text: "Severe bronchitis", correct: false },
      { text: "Severe pleuritis", correct: false },
      { text: "Severe bronchoectasis", correct: false },
    ],
  },
  {
    question: "Oliguria is a sign of the urine output equal:",
    answers: [
      { text: "0, 5 ml/kg/h", correct: true },
      { text: "0,05 ml/kg/h", correct: false },
      { text: "0,1 ml/kg/h", correct: false },
      { text: "5,0 ml/kg/h", correct: false },
      { text: "1,0 ml/kg/h", correct: false },
    ],
  },
  {
    question: "Abnormally frequent passage of relatively small quantities of urine is a: ",
    answers: [
      { text: "pollakiuria ", correct: true },
      { text: "dysuria", correct: false },
      { text: "oliguria ", correct: false },
      { text: "anuria", correct: false },
      { text: "polyuria", correct: false },
    ],
  },
  {
    question: "What is the most common cause of acute renal failure?",
    answers: [
      { text: "acute tubular necrosis", correct: true },
      { text: "acute glomerulonephritis", correct: false },
      { text: "acute pyelonephritis", correct: false },
      { text: "disseminated intravascular coagulation", correct: false },
      { text: "hemolytic uremic syndrome", correct: false },
    ],
  },
  {
    question: "What is the commonest cause of the acute glomerulonephritis?",
    answers: [
      { text: "Streptococcal infection", correct: true },
      { text: "IgA nephropathy", correct: false },
      { text: "E-coli infection", correct: false },
      { text: "Goodpasture’s syndrome", correct: false },
      { text: "Vasculitis", correct: false },
    ],
  },
  {
    question: "Anasarca symptom is most specific for:",
    answers: [
      { text: "nephrotic syndrome", correct: true },
      { text: "nephritic syndrome", correct: false },
      { text: "IgA-glomerulonephritis", correct: false },
      { text: "pyelonephritis", correct: false },
      { text: "cystitis", correct: false },
    ],
  },
  {
    question: "What type of salts causes kidney stone disease?",
    answers: [
      { text: "calcium oxalate ", correct: true },
      { text: "calcium fosphate", correct: false },
      { text: "calcium urate", correct: false },
      { text: "calcium bilirubinate", correct: false },
      { text: "calcium citrate ", correct: false },
    ],
  },
  {
    question: "At what parameters of the level of glomerular filtration can a severe stage of chronic kidney disease(CKD4)  be established?",
    answers: [
      { text: "15 to 29 mL/min/1.73 m2", correct: true },
      { text: "above 90 mL/min/1.73 m2 ", correct: false },
      { text: "45 to 79 mL/min/1.73 m2", correct: false },
      { text: "30 to 59 mL/min/1.73 m2", correct: false },
      { text: "less than 15 mL/min/1.73 m2 ", correct: false },
    ],
  },
  {
    question: "What medication is used for correction of electrolyte balance in treatment with diuretics? ",
    answers: [
      { text: "potassium chloride ", correct: true },
      { text: "potassium citrate ", correct: false },
      { text: "sodium chloride", correct: false },
      { text: "calcium gluconate", correct: false },
      { text: "calcium chloride", correct: false },
    ],
  },
  {
    question: "A 9-year-old boy has swelling of the face, legs, abdomen, scrotum, blood pressure 100/60 mm Hg , diuresis 600 ml/ day . From the anamnesis: 3 years ago, the diagnosis of \"Nephrotic syndrome\" was established, steroid therapy was carried out, the duration of remission was 2 years. In the blood test: Hb - 90 g / l, erythrocytes - 3.1 million, ESR 4 mm / h. GFR - 44ml/min. What therapy is needed in this case?",
    answers: [
      { text: "nephroprotective", correct: true },
      { text: " steroid", correct: false },
      { text: " diuretic", correct: false },
      { text: " hemodialysis", correct: false },
      { text: " antibacterial", correct: false },
    ],
  },
  {
    question: "A 10-year-old boy with hearing loss has hematuria in the urine (his maternal grandfather died at the age of 45 from chronic renal failure). What method of examination will confirm the diagnosis?",
    answers: [
      { text: "genotyping", correct: true },
      { text: "CT scan", correct: false },
      { text: " cystoscopy", correct: false },
      { text: " kidney biopsy", correct: false },
      { text: "urography", correct: false },
    ],
  },
  {
    question: "Normal values of the total iron-binding capacity in the blood equal: ",
    answers: [
      { text: "250 to 450 μg/dL", correct: true },
      { text: "20 to 45 μg/dL ", correct: false },
      { text: "45 to 90 μg/dL", correct: false },
      { text: "90 to 150 μg/dL ", correct: false },
      { text: "150 to 250 μg/dL", correct: false },
    ],
  },
  {
    question: "The main pathogenic mechanism of hemorrhagic Vasculitis is: ",
    answers: [
      { text: "immune complex lesion of the vessels", correct: true },
      { text: "infectious lesion of the vessels", correct: false },
      { text: "disseminated intravascular coagulation", correct: false },
      { text: "autoimmune lesion of the vessels", correct: false },
      { text: "toxic lesion of the vessels", correct: false },
    ],
  },
  {
    question: "The free hemoglobin released from erythrocytes binds with:",
    answers: [
      { text: "haptoglobin ", correct: true },
      { text: "albumin ", correct: false },
      { text: "globulin ", correct: false },
      { text: "hemosiderin ", correct: false },
      { text: "glycoprotein", correct: false },
    ],
  },
  {
    question: "Which of the following stimulates erythropoiesis?",
    answers: [
      { text: "increased demand of tissue oxygen", correct: true },
      { text: "decreased demand of tissue carbon dioxide ", correct: false },
      { text: "increased demand of tissue carbon dioxide", correct: false },
      { text: "decreased demand of tissue oxygen", correct: false },
      { text: "metabolic acidosis", correct: false },
    ],
  },
  {
    question: "For which disease is an increase in the concentration of indirect bilirubin in the blood specific?",
    answers: [
      { text: "Sickle cell anemia", correct: true },
      { text: "Hemophilia", correct: false },
      { text: "Cholecystitis", correct: false },
      { text: " Biliary atresia", correct: false },
      { text: "Aplastic anemia", correct: false },
    ],
  },
  {
    question: "The heterozygous state of sickle cell trait is characterized by:",
    answers: [
      { text: "Hemoglobin AS", correct: true },
      { text: "Hemoglobin AA", correct: false },
      { text: "Hemoglobin SS", correct: false },
      { text: "Hemoglobin BB ", correct: false },
      { text: "Hemoglobin SB", correct: false },
    ],
  },
  {
    question: "What type of hemorrhagic syndrome requires of using cryoprecipitate?  ",
    answers: [
      { text: "clotting factor 8 deficiency", correct: true },
      { text: "thrombocytopenia", correct: false },
      { text: "clotting factor 2 deficiency", correct: false },
      { text: "vasculitis", correct: false },
      { text: " fibrinolysis", correct: false },
    ],
  },
  {
    question: "Skin rash, artralgia, periatricular oedema, abdominal pain and glomerulonephritis are characteristic of: ",
    answers: [
      { text: "Henoch-Schonlein purpura", correct: true },
      { text: "Goodpasture’s syndrome", correct: false },
      { text: "Wegner’s granulomatosis", correct: false },
      { text: "Reumathic fever", correct: false },
      { text: "SLE", correct: false },
    ],
  },
  {
    question: "What disease can be diagnosed using the indirect Coomb's test?",
    answers: [
      { text: "Immune hemolytic anemia ", correct: true },
      { text: "Pernicious anemia", correct: false },
      { text: "Hereditary spherocytosis", correct: false },
      { text: "Thrombocytopenia", correct: false },
      { text: "Hemoglobin SS disease", correct: false },
    ],
  },
  {
    question: "Hypoprothrombinemia is treated by:",
    answers: [
      { text: "Phytonadione ", correct: true },
      { text: "Retinol", correct: false },
      { text: "Cryoprecipitate", correct: false },
      { text: "Desmopressin", correct: false },
      { text: "Cyanocobalamin", correct: false },
    ],
  },
  {
    question: "Normal values of glycohemoglobin (HbA1c) in the blood range from ",
    answers: [
      { text: "4% to 6%.", correct: true },
      { text: "1% to 2%.", correct: false },
      { text: "16 % to 18%.", correct: false },
      { text: "8% to 10%.", correct: false },
      { text: "12% to 14%.", correct: false },
    ],
  },
  {
    question: "What complain is characterized of the hyperglycemia? ",
    answers: [
      { text: "Thirst", correct: true },
      { text: "Reduced vision", correct: false },
      { text: "Excessive weight gain", correct: false },
      { text: " Sweating", correct: false },
      { text: "Sense of \"inner trembling\"", correct: false },
    ],
  },
  {
    question: "What change in hormone production is specific for diabetes insipidus?",
    answers: [
      { text: "Deficiency of ADH", correct: true },
      { text: "Deficiency of STH", correct: false },
      { text: "Deficiency of TSH", correct: false },
      { text: "Excess of STH", correct: false },
      { text: " Excess of ADH", correct: false },
    ],
  },
  {
    question: "What disease is accompanied with a deficiency of STH? ",
    answers: [
      { text: "Hypopituitarism", correct: true },
      { text: "Hypogonadism", correct: false },
      { text: "Hypothyroidism", correct: false },
      { text: "Hypoparathyroidism", correct: false },
      { text: "Adrenal insufficiency", correct: false },
    ],
  },
  {
    question: "Which coma is more likely in a patient with sudden loss of consciousness in type diabetes mellitus?",
    answers: [
      { text: "Hypoglicemic", correct: true },
      { text: "Ketoacidotic", correct: false },
      { text: "Lactic-acid", correct: false },
      { text: "Hyperosmolar", correct: false },
      { text: "Hyperglicemic", correct: false },
    ],
  },
  {
    question: "What mechanism is linked with the pathogenesis of osteoporosis in Cushing syndrome? ",
    answers: [
      { text: "Catabolism", correct: true },
      { text: "Lipolysis", correct: false },
      { text: "Gluconeogenesis", correct: false },
      { text: "Glycogenolysis", correct: false },
      { text: "Anabolism", correct: false },
    ],
  },
  {
    question: "Where the mineralocorticoids are synthesized? ",
    answers: [
      { text: "in the zona glomerulosa of the adrenal cortex", correct: true },
      { text: "in the zona fasciculata of the adrenal cortex", correct: false },
      { text: "in the zona  reticularis of the adrenal cortex", correct: false },
      { text: "in the adrenal medulla", correct: false },
      { text: "in the pituitary gland", correct: false },
    ],
  },
  {
    question: "What the preparation is recommended for individual prophylaxis of iodine deficiency by WHO?  ",
    answers: [
      { text: "Potassium iodide", correct: true },
      { text: "Iodized multivitamin", correct: false },
      { text: "Т3 и Т4", correct: false },
      { text: "Levothyroxine", correct: false },
      { text: "Sodium iodate", correct: false },
    ],
  },
  {
    question: "What aim of injection insulin Glargin in diabetic child?",
    answers: [
      { text: "To control glycemia at night time and between meal taking ", correct: true },
      { text: "To сontrol glycemia after meals ", correct: false },
      { text: "To prevent ketonemia", correct: false },
      { text: "To control weight gain ", correct: false },
      { text: "To prevent hypoglycemia ", correct: false },
    ],
  },
  {
    question: "What medicine is used to treat congenital hypothyroidism?",
    answers: [
      { text: "Levothyroxine sodium", correct: true },
      { text: "Propranolol hydrochloride", correct: false },
      { text: "Sodium iodine", correct: false },
      { text: "Metamizole sodium", correct: false },
      { text: "Potassium iodine", correct: false },
    ],
  },
  {
    question: "What hormone changes confirm congenital hypothyroidism in infants?",
    answers: [
      { text: "TSH ↑ T4 ↓", correct: true },
      { text: "ADH↓ T4 N", correct: false },
      { text: "ADH↓ T4 ↑", correct: false },
      { text: "TSH ↓ T4 ↑", correct: false },
      { text: "TSH N  T4 ↑", correct: false },
    ],
  },
  {
    question: "Four chambers of heart and main vessels are formed in intrauterine life in:",
    answers: [
      { text: " 3-8 weeks of gestational age ", correct: true },
      { text: "1-3 weeks of gestational age", correct: false },
      { text: "16-18 weeks of gestational age", correct: false },
      { text: " 8 -12 weeks of gestational age", correct: false },
      { text: "12-15 weeks of gestational age", correct: false },
    ],
  },
  {
    question: "WHO: Very preterm newborn is defined as babies born alive at:",
    answers: [
      { text: " 28  to <32 weeks of pregnancy", correct: true },
      { text: "22 to <25 weeks of pregnancy", correct: false },
      { text: "25  to <28 weeks of pregnancy", correct: false },
      { text: "37-39 weeks of pregnancy", correct: false },
      { text: "32 - 37 weeks of pregnancy", correct: false },
    ],
  },
  {
    question: "Which reflex is not present in newborn at birth?",
    answers: [
      { text: "Symmetric tonic neck reflex", correct: true },
      { text: "Moro’s reflex", correct: false },
      { text: "Babinsky’s reflex", correct: false },
      { text: "Crossed extensor reflex", correct: false },
      { text: "Asymmetric tonic neck reflex", correct: false },
    ],
  },
  {
    question: "Respiratory distress syndrome is also known as:",
    answers: [
      { text: "Hyaline membrane disease", correct: true },
      { text: "Hyaline cartilage dysplasia", correct: false },
      { text: "Primary cilliary dyskinesia", correct: false },
      { text: "Primary hyaline dysmorphism", correct: false },
      { text: "Bronchopulmonary dysplasia", correct: false },
    ],
  },
  {
    question: "Which of the following is the principal mode of heat exchange in an infant incubator?",
    answers: [
      { text: "Convection", correct: true },
      { text: "Radiation", correct: false },
      { text: "Evaporation", correct: false },
      { text: "Ozonization", correct: false },
      { text: "Conduction", correct: false },
    ],
  },
  {
    question: "Symptom describes the small amounts of milk which often accompany the return swallowed air in newborn:",
    answers: [
      { text: "Posseting", correct: true },
      { text: "Vomiting", correct: false },
      { text: "Nausea", correct: false },
      { text: "Reflux", correct: false },
      { text: "Belching", correct: false },
    ],
  },
  {
    question: "A gentle stroke on the newborn’s cheek - baby turns toward the touch, with mouth open. What is this reflex?",
    answers: [
      { text: "Root reflex", correct: true },
      { text: "Sucking reflex", correct: false },
      { text: "Babinski’s reflex", correct: false },
      { text: "Moro reflex", correct: false },
      { text: "Tonic neck reflex", correct: false },
    ],
  },
  {
    question: "Excess of vitamin K in newborn causes:",
    answers: [
      { text: "hyperbilirubinemia", correct: true },
      { text: "bleeding disorders", correct: false },
      { text: "hyperglucosuria", correct: false },
      { text: "disprothrombinaemia", correct: false },
      { text: "afibrinogenaemia", correct: false },
    ],
  },
  {
    question: "Which of the following reason causes the hemorrhagic disease of the newborn?",
    answers: [
      { text: "clotting factor 2 deficiency", correct: true },
      { text: "clotting factor 5 deficiency", correct: false },
      { text: "clotting factor 8 deficiency", correct: false },
      { text: "capillaropathy", correct: false },
      { text: "thrombocytopenia", correct: false },
    ],
  },
  {
    question: "What disorder is typical for hypomagnesemia in infant?  ",
    answers: [
      { text: "excitation of CNS", correct: true },
      { text: "oppression of CNS", correct: false },
      { text: "shortness of breath", correct: false },
      { text: "oppression breathing", correct: false },
      { text: "hyporeflexia", correct: false },
    ],
  },
  {
    question: "Chorioretinitis, obstructive hydrocephalus, mental retardation, intracranial calcification and convulsions in newborn are signs of:",
    answers: [
      { text: "Toxoplasmosis", correct: true },
      { text: "Herpes simplex virus", correct: false },
      { text: "Syphillis", correct: false },
      { text: "Rubella", correct: false },
      { text: "CMV", correct: false },
    ],
  },
  {
    question: "Deafness,retinopathy, cataract, microphthalmia, congenital heart disease in newborn are signs of:",
    answers: [
      { text: "Rubella", correct: true },
      { text: "Toxoplasmosis", correct: false },
      { text: "Herpes simplex virus", correct: false },
      { text: "Syphillis", correct: false },
      { text: "CMV", correct: false },
    ],
  },
  {
    question: "What is the  level  of  total serum bilirubin  if the Kramer scale  zone is 3 (face to umbilical):",
    answers: [
      { text: "8mg/dl", correct: true },
      { text: "5 mg/dl", correct: false },
      { text: "17mg/dl", correct: false },
      { text: "11mg/dl", correct: false },
      { text: "14mg/dl", correct: false },
    ],
  },
  {
    question: "Which of the following is mostly likely to be a cause of jaundice starting between 24 h. and 3 weeks of age?",
    answers: [
      { text: "Breast milk jaundice", correct: true },
      { text: "Kinase deficiency", correct: false },
      { text: "ABO incompatibility", correct: false },
      { text: "Rhesus incompatibility", correct: false },
      { text: "G6PD deficiency ", correct: false },
    ],
  },
  {
    question: "The most widely used treatment for neonatal jaundice is:",
    answers: [
      { text: "phototherapy ", correct: true },
      { text: "exchange blood transfusion ", correct: false },
      { text: "kinesitherapy", correct: false },
      { text: "hemodialysis", correct: false },
      { text: "diazepam", correct: false },
    ],
  },
  {
    question: "A newborn baby is born with meconium stained liquor and is depressed at birth. Which action will you start?",
    answers: [
      { text: "suction oral cavity", correct: true },
      { text: "warm the baby", correct: false },
      { text: "ventilation", correct: false },
      { text: "chest comtression", correct: false },
      { text: "stimulation", correct: false },
    ],
  },
  {
    question: "A 2-hour-old fullterm baby delivered to a mother with gestational diabetes by CS, he developed an increasing respiratory distress and grunting with blood gases values indicative of respiratory failure,Of the following, the BEST mode to be used in mechanical ventilation is  :",
    answers: [
      { text: "pressure-regulated volume control (PRVC) ", correct: true },
      { text: "intermittent  mechanical ventilation (IMV) ", correct: false },
      { text: "synchronized Intermittent  mechanical ventilation (SIMV) ", correct: false },
      { text: "synchronized Intermittent  positive pressure ventilation (SIPPV) ", correct: false },
      { text: "pressure support ventilation (PSV) ", correct: false },
    ],
  },
  {
    question: "What is the morphological defect that characterizes Patent Foramen Ovale?",
    answers: [
      { text: "aperture between right and left atriums", correct: true },
      { text: "aperture between right and left ventricles", correct: false },
      { text: "aperture between vein cava and aorta", correct: false },
      { text: "aperture between right atrium and left ventricle", correct: false },
      { text: "aperture between pulmonary artery and aorta", correct: false },
    ],
  },
  {
    question: "The most common causative organism for bacterial endocarditis is the",
    answers: [
      { text: "streptococcus pyogenes", correct: true },
      { text: "streptococcus pneumonia", correct: false },
      { text: "streptococcus thermophilus", correct: false },
      { text: "streptococcus viridance", correct: false },
      { text: "streptococcus oralis", correct: false },
    ],
  },
  {
    question: "The sing is not included in left side cardiac failure:",
    answers: [
      { text: "hepatomegaly", correct: true },
      { text: "tachypnoe", correct: false },
      { text: "tachycardia", correct: false },
      { text: "cough", correct: false },
      { text: "rales in chest", correct: false },
    ],
  },
  {
    question: "What circulatory disorder is observed in Cor Pulmonale?",
    answers: [
      { text: "right ventricular failure", correct: true },
      { text: "left ventricular failure", correct: false },
      { text: "left ventricular hypertrophy", correct: false },
      { text: "right-left atrial shunt", correct: false },
      { text: "left-right ventricular shunt", correct: false },
    ],
  },
  {
    question: "What type of pathology does the hypertrophic cardiomyopathy belong to?",
    answers: [
      { text: "Chromosome anomaly", correct: true },
      { text: "Infectious disease", correct: false },
      { text: " Immunocomplex disease", correct: false },
      { text: "Congenital defect", correct: false },
      { text: "Acquired abnormality", correct: false },
    ],
  },
  {
    question: "Prolongation of the PR-interval and development of peaked T-waves on the electrocardiogram is a sign of:",
    answers: [
      { text: "hyperkalemia", correct: true },
      { text: "hypokalemia", correct: false },
      { text: "hypercalciemia", correct: false },
      { text: "hypocalciemia", correct: false },
      { text: "hypophosphatemia", correct: false },
    ],
  },
  {
    question: "The right ventricular hypertrophy, ventricular septal defect, abnormal position of the aorta, and pulmonary valve stenosis are the signs of:",
    answers: [
      { text: "tetralogy of Fallot", correct: true },
      { text: "transposition of the great vessels", correct: false },
      { text: "duct-dependant coarctation", correct: false },
      { text: "supraventricular pulmonary stenosis", correct: false },
      { text: "Eisengeimer’s syndrome", correct: false },
    ],
  },
  {
    question: "What is the most common type of cardiac arrhythmia in children?",
    answers: [
      { text: "supraventricular tachycardia", correct: true },
      { text: "ectopic atrial tachycardia", correct: false },
      { text: "complete heart block", correct: false },
      { text: "long QT syndrome", correct: false },
      { text: "atrial fibrillation", correct: false },
    ],
  },
  {
    question: "Pericarditis is characterized by:",
    answers: [
      { text: "elevated ST segment on the ECG", correct: true },
      { text: "downed ST segment on the ECG", correct: false },
      { text: "dilated QRS segment on the ECG", correct: false },
      { text: "narrowed QRS segment on the ECG", correct: false },
      { text: "doubled P wave on the ECG", correct: false },
    ],
  },
  {
    question: "At what point in the chest the systolic murmur is best heard by auscultation in aortic stenosis?",
    answers: [
      { text: "2nd right intercostal spaces", correct: true },
      { text: "2nd left intercostal spaces", correct: false },
      { text: "5th right mid-clavicular intercostal space", correct: false },
      { text: "4th left intercostal space", correct: false },
      { text: "5th left mid-clavicular intercostal space", correct: false },
    ],
  },
  {
    question: "Which diagnostic method is preferable to use for the diagnosis of patent ductus arteriosus? ",
    answers: [
      { text: "Doppler-echocardiography ", correct: true },
      { text: "Impedance plethysmography ", correct: false },
      { text: "Ultrasonography", correct: false },
      { text: "Echocardiography ", correct: false },
      { text: "Computed tomography ", correct: false },
    ],
  },
  {
    question: "From which group are antibiotics used to treat Rheumatiс Fever? ",
    answers: [
      { text: "Penicillins", correct: true },
      { text: "Aminoglycosides", correct: false },
      { text: "Cephalosporins", correct: false },
      { text: "Macrolides", correct: false },
      { text: "Carbapenems", correct: false },
    ],
  },
  {
    question: "A 5 year old girl during the regular examination presents loud 1st heart sound, split 2nd heart sound that does not change with respiration. The girl is active and looks healthy. Which of the following heart lesions most likely explains these findings?",
    answers: [
      { text: "ASD", correct: true },
      { text: "VSD", correct: false },
      { text: "Tetralogy of Fallot", correct: false },
      { text: "PDA", correct: false },
      { text: "Coarctation of aorta", correct: false },
    ],
  },
  {
    question: "A healthy term neonate, was noted to be cyanosed at the second day of age. On examination, there were no murmur and no respiratory distress. On the third day, the cyanosis became more obvious and tachypnea was noted. Of the following, in addition to a cardiosurgery referral, the MOST appropriate treatment should be done:",
    answers: [
      { text: "Prostoglandin E 2 infusion", correct: true },
      { text: "Dexamethazone infusion ", correct: false },
      { text: "Epinephrin infusion", correct: false },
      { text: "Indometacin infusion", correct: false },
      { text: "Dobutamin infusion", correct: false },
    ],
  },
  {
    question: "Which vitamin deficiency of leads to the disease - pellagra?",
    answers: [
      { text: "Vitamin Vit B3 deficiency", correct: true },
      { text: "Vitamin A deficiency", correct: false },
      { text: "Vitamin PP deficiency", correct: false },
      { text: "Vitamin Vit B1 deficiency", correct: false },
      { text: "Vitamin Vit B6 deficiency", correct: false },
    ],
  },
  {
    question: "What biochemical change rickets is characterized by? ",
    answers: [
      { text: "increased level of alkaline phosphatase", correct: true },
      { text: "decreased level of alkaline phosphatase", correct: false },
      { text: "increased level of glutamic transaminase", correct: false },
      { text: "decreased level of glutamic transaminase", correct: false },
      { text: "increased level of enterokinase", correct: false },
    ],
  },
  {
    question: "The hyporeflexia,  muscle weakness, nyctalopia (night blindness), ataxia, myopathy, hemolysis, nystagmus are the signs of:",
    answers: [
      { text: "vit.E deficiency", correct: true },
      { text: "vit.A deficiency", correct: false },
      { text: "vit.B6 deficiency", correct: false },
      { text: " vit.B9 deficiency", correct: false },
      { text: " vit.C deficiency", correct: false },
    ],
  },
  {
    question: "Sore mouth and tongue, bloodshot eyes, angular cheilitis, photophobia, and scrotal dermatitis are the signs of deficiency:",
    answers: [
      { text: " vit.B2", correct: true },
      { text: "vit.B1", correct: false },
      { text: "vit.B9", correct: false },
      { text: "vit.B3 ", correct: false },
      { text: "vit.B6", correct: false },
    ],
  },
  {
    question: "The oral-ocular-genital syndrome (angular cheilitis, photophobia, and scrotal dermatitis) is:",
    answers: [
      { text: "Riboflavin deficiency", correct: true },
      { text: "Thiamin deficiency", correct: false },
      { text: "Folate deficiency", correct: false },
      { text: "Niacin deficiency", correct: false },
      { text: "Pyridoxine deficiency", correct: false },
    ],
  },
  {
    question: "A 6-year-old child is brought to the pediatric clinic with leg pain and bowing. Laboratory investigations reveal a serum calcium level of 9.5 mg/dL, phosphorus level of 2.0 mg/dL, alkaline phosphatase level of 1500 U/L, and a 25-hydroxyvitamin D level of 10 ng/mL. What is the most likely diagnosis?",
    answers: [
      { text: "Rickets", correct: true },
      { text: "Osteogenesis imperfecta", correct: false },
      { text: "Osteoporosis", correct: false },
      { text: "Hypoparathyroidism", correct: false },
      { text: "arthritis", correct: false },
    ],
  },
  {
    question: "Which of the following is the recommended duration of treatment for severe acute malnutrition (SAM) in children?",
    answers: [
      { text: "12 weeks", correct: true },
      { text: "2 weeks", correct: false },
      { text: "4 weeks", correct: false },
      { text: "8 weeks", correct: false },
      { text: "16 weeks", correct: false },
    ],
  },
  {
    question: "According to this definition, \"A form of severe malnutrition with symptoms of swelling, thin, scanty or discoloured hair, and skin with discolored patches that may crack and peel,\" what disorder can be defined in baby?",
    answers: [
      { text: "Kwashiorkor", correct: true },
      { text: "Pellagra", correct: false },
      { text: "Marasmus", correct: false },
      { text: "Eczema", correct: false },
      { text: " Dermatomycosis", correct: false },
    ],
  },
  {
    question: "A 2-year-old child presents with irritability, weakness, and an inability to stand. On examination, the child is found to have bleeding gums, loose teeth, and slow wound healing. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Scurvy", correct: true },
      { text: "Kwashiorkor", correct: false },
      { text: "Vasculitis", correct: false },
      { text: "Pellagra", correct: false },
      { text: "Angular cheilitis", correct: false },
    ],
  },
  {
    question: "Use the BMI formula to calculate BMI of the following child (round the result to one decimal place): An 18-month-old child is 78.8 cm in length and weighs 11.2 kg",
    answers: [
      { text: "BMI = 18.7", correct: true },
      { text: "BMI = 15.7", correct: false },
      { text: "BMI = 16.3", correct: false },
      { text: "BMI = 17.8", correct: false },
      { text: "BMI = 21.3", correct: false },
    ],
  },
  {
    question: "A 4-year-old child is brought to the pediatric clinic with fatigue, pallor, and irritability. Laboratory investigations reveal a hemoglobin level of 8.5 g/dL, mean corpuscular volume (MCV) of 60 fL, and serum ferritin level of 5 ng/mL. What is the most likely diagnosis?",
    answers: [
      { text: "Iron deficiency anemia", correct: true },
      { text: "Hemosiderosis", correct: false },
      { text: "Hemoglobin SS disease", correct: false },
      { text: "Megaloblastic anemia", correct: false },
      { text: "Thalassemia", correct: false },
    ],
  },
  {
    question: "What pathology is characterized by severe, life-threatening, generalized or systemic hypersensitivity reaction?",
    answers: [
      { text: "Anaphilaxis", correct: true },
      { text: "Septic shock", correct: false },
      { text: "Hey fever", correct: false },
      { text: "Bronchial asthma", correct: false },
      { text: "Urticaria", correct: false },
    ],
  },
  {
    question: "What the class of drugs for the treatment of bronchial asthma does Ipratropium bromide belong to?",
    answers: [
      { text: "Anticholinergic bronchodilator", correct: true },
      { text: "Short-acting B2 bronchodilator", correct: false },
      { text: "Long-acting B2 agonist", correct: false },
      { text: "Inhaled glucocorticoid", correct: false },
      { text: "Leikotrien inhibitor", correct: false },
    ],
  },
  {
    question: "Basic therapy in children with humoral immunodeficiency is carried out using: ",
    answers: [
      { text: "immunoglobulins", correct: true },
      { text: "glucocorticoids", correct: false },
      { text: "cytostatics", correct: false },
      { text: "immunosuppressors", correct: false },
      { text: "interferons", correct: false },
    ],
  },
  {
    question: "What are the causes of primary dyskinesia of the biliary system?",
    answers: [
      { text: "Dysfunctions of the autonomic nervous system", correct: true },
      { text: "Anomalies in the development of the gallbladder and biliary tract", correct: false },
      { text: "viral hepatitis", correct: false },
      { text: "Parasitic infections", correct: false },
      { text: "Chronic gastroduodenal pathology", correct: false },
    ],
  },
  {
    question: "Malformations of the esophagus include: ",
    answers: [
      { text: "esophageal-tracheal fistula", correct: true },
      { text: "esophageal-gastric fistula", correct: false },
      { text: " erosion of the esophagus", correct: false },
      { text: "esophagitis", correct: false },
      { text: " dilatation of the esophagus.", correct: false },
    ],
  },
  {
    question: "A decrease in the acidity of gastric juice leads to:",
    answers: [
      { text: "impaired hydrolysis of proteins", correct: true },
      { text: "impaired hydrolysis of fats", correct: false },
      { text: "increased motility of the GIT", correct: false },
      { text: "weakening motility of the GIT", correct: false },
      { text: "impaired endocrine function of the GIT", correct: false },
    ],
  },
  {
    question: "What happens to dietary carbohydrate? ",
    answers: [
      { text: "It’s broken into monosaccharide by amilase", correct: true },
      { text: "It’s broken into amino acids by hydrolysis", correct: false },
      { text: "It’s broken into simple sugars by sucrose", correct: false },
      { text: " It’s broken into simple sugars by reductase", correct: false },
      { text: "It’s broken into monosaccharide by chymotrypsin", correct: false },
    ],
  },
  {
    question: "What happens to dietary fat?",
    answers: [
      { text: "It’s broken into diglycerides by lingual lipase", correct: true },
      { text: " It’s broken into amino acids by hydrolysis", correct: false },
      { text: "It’s broken into fatty acids by entrokinase", correct: false },
      { text: "It’s broken into diglycerides by pancreatic lipase", correct: false },
      { text: "It’s broken into diglycerides by bile acids", correct: false },
    ],
  },
  {
    question: "What happens to dietary protein? ",
    answers: [
      { text: "It’s broken into polypeptides by pepsin", correct: true },
      { text: "It’s broken into amino acids by gastrin ", correct: false },
      { text: "It’s broken into polypeptides by reductase", correct: false },
      { text: "It’s broken into polypeptides by trypsin", correct: false },
      { text: "It’s broken into amino acids by bile acids", correct: false },
    ],
  },
  {
    question: "Contraction of gallbladder is due to action of:",
    answers: [
      { text: "gastrin", correct: true },
      { text: "pancreatic juice", correct: false },
      { text: " chymosin", correct: false },
      { text: "secretin", correct: false },
      { text: "cholesterol.", correct: false },
    ],
  },
  {
    question: "To assess the composition of bile shall be used:  ",
    answers: [
      { text: "duodenal intubation", correct: true },
      { text: "gastric intubation", correct: false },
      { text: "cholecystography", correct: false },
      { text: "fecal test", correct: false },
      { text: "ultrasound", correct: false },
    ],
  },
  {
    question: "A characteristic clinical sign of chronic pancreatitis is: 1) ; 2) ; 3) ; 4) ; 5).",
    answers: [
      { text: "maldigestion", correct: true },
      { text: "increased activity of aminotransferases", correct: false },
      { text: " halitosis", correct: false },
      { text: "jaundice", correct: false },
      { text: "diabetes mellitus type1", correct: false },
    ],
  },
  {
    question: "The symptom of gastroesophageal reflux disease is:",
    answers: [
      { text: "pyrosis", correct: true },
      { text: "aerophagia", correct: false },
      { text: "rumination", correct: false },
      { text: "odynophagia", correct: false },
      { text: "regurgitation", correct: false },
    ],
  },
  {
    question: "The most informative method in the diagnosis of ulcerative colitis: ",
    answers: [
      { text: " colonoscopy", correct: true },
      { text: "sigmoidoscopy", correct: false },
      { text: "ultrasound examination", correct: false },
      { text: "irrigoscopy", correct: false },
      { text: "bacteriological examination of feces", correct: false },
    ],
  },
  {
    question: "Bleeding from esophageal varices is observed with: ",
    answers: [
      { text: "portal hypertension", correct: true },
      { text: "chronic pancreatitis", correct: false },
      { text: "prolonged constipation", correct: false },
      { text: "cholelithiasis", correct: false },
      { text: "acute hepatitis", correct: false },
    ],
  },
  {
    question: "The preferred diagnostic study in patients with an ulcerative colitis is:",
    answers: [
      { text: "Endoscopy and biopsy", correct: true },
      { text: "Abdominal MRI study", correct: false },
      { text: "Plain abdominal X-ray", correct: false },
      { text: "Abdominal CT scan study", correct: false },
      { text: "Barium enema", correct: false },
    ],
  },
  {
    question: "The girl is 1,2 years old. Complaints of cough, fever, dyspnea, weakness, poor appetite. He ill 4 days. The body temperature is 38.6C, breathing rate is 55 per minute, lower chest indrawing. Complete blood count: leukocytes 13 x 109/L ., Stab. 8%, ESR 18 mm/h. What is your suspected diagnosis?",
    answers: [
      { text: "Acute pneumonia", correct: true },
      { text: "Viral croup", correct: false },
      { text: "Foreign body aspiration", correct: false },
      { text: "Obstructive brochitis", correct: false },
      { text: "Retropharyngeal abscess", correct: false },
    ],
  },
  {
    question: "A 22 month-old child presents with cough and fever. On examination respiratory rate 56/min., temperature 38,9C, lower chest indrawing. Which of the following is the most common diseases?",
    answers: [
      { text: "Pneumonia", correct: true },
      { text: "Brochitis", correct: false },
      { text: "Brochiolitis", correct: false },
      { text: "Epiglottitis", correct: false },
      { text: "Pleuritis", correct: false },
    ],
  },
  {
    question: "A 3 year-old child presented with cough and fever. On examination respiratory rate 46/min., temperature 38,5C, fatigue, lower chest indrawing. The most likely etiological agent in this case is…",
    answers: [
      { text: "Streptococcus pneumonia", correct: true },
      { text: "Klebsiella pneumonia", correct: false },
      { text: "H-influenza", correct: false },
      { text: "Staphyloccocus aureus", correct: false },
      { text: "Pneumocystis carinii", correct: false },
    ],
  },
  {
    question: "A 5-year-old child was hospitalized for appendicitis and developed pneumonia in the hospital. Doctors suspect nosocomial pneumonia. Why do they think so and after how many hours can hospital-acquired pneumonia develop?",
    answers: [
      { text: "48h of hospitalization", correct: true },
      { text: "12h of hospitalization", correct: false },
      { text: "24h of hospitalization", correct: false },
      { text: "36h of hospitalization", correct: false },
      { text: "60h of hospitalization", correct: false },
    ],
  },
  {
    question: "A 5-year-old child was hospitalized for appendicitis and developed pneumonia in the hospital. Doctors suspect nosocomial pneumonia. Which of the following is most appropriate causes?",
    answers: [
      { text: "Staphylococcus aureus", correct: true },
      { text: "Streptococcus pneumonia", correct: false },
      { text: "Streptococcus pyogenes", correct: false },
      { text: "Escherichia coli", correct: false },
      { text: "Mycobacterium avium", correct: false },
    ],
  },
  {
    question: "The boy is 6 years old. Complaints of a wet cough, dyspnea, fever, wheezing, weakness, abdominal pain. The girl from birth often suffers from obstructive bronchitis, pneumonia, several times received inpatient treatment. On examination, the skin is pale with a grayish tinge. Fingers in the form of a drum stick. The chest is barrel-shaped. Auscultation: wheezing, exhalation is prolonged. Hepatomegaly. Stool frequent, abundant and fetid. Which of the following diseases in this child?",
    answers: [
      { text: "Cystic fibrosis", correct: true },
      { text: "Bronchial asthma ", correct: false },
      { text: "Chronic pneumonia", correct: false },
      { text: "Pleuritis", correct: false },
      { text: "Bronchoectasis", correct: false },
    ],
  },
  {
    question: "Kwashiorkar is due to deficiency of",
    answers: [
      { text: "Minerals", correct: true },
      { text: "Calories", correct: false },
      { text: "Water soluble vitamines", correct: false },
      { text: "vitamines", correct: false },
      { text: "water", correct: false },
    ],
  },
  {
    question: "A 12 year-old child presents with complaints of high fever, difficulty swallowing, drooling and fatigue. On examination respiratory rate 28/min, drooling, soft stridor, fever 39,4˚C. Sitting up or leaning forward to ease breathing. Which of the following is the most appropriate initial management?",
    answers: [
      { text: "Ceftriaxon", correct: true },
      { text: "Ampicillin", correct: false },
      { text: "Erytрromycin", correct: false },
      { text: "Gentamicin", correct: false },
      { text: "Сlotrimazole", correct: false },
    ],
  },
  {
    question: "A 2 years old child was brought to the emergency depertment at 3 am. The child presented with fever and cough. On examination respiratory rate 36/min, temperature 38.4˚C, lower chest indrawing and saturation on pulse oxymetry 96%. The child had barking cough and stridor at the rest. Which of the following is the most appropriate management?",
    answers: [
      { text: "Steroid", correct: true },
      { text: "Antibiotic", correct: false },
      { text: "Mucolytic", correct: false },
      { text: "Antipyretic", correct: false },
      { text: "Bronchodilatator", correct: false },
    ],
  },
  {
    question: "A 2,5 years old child presented with fever and cough. On examination respiratory rate 38/min, temperature 38.4˚C and saturation on pulse oxymetry 96%. The child had barking cough and stridor. Which of the following is the most appropriate dosage dexamethasone?",
    answers: [
      { text: "0,6mg/kg", correct: true },
      { text: "0,4mg/kg", correct: false },
      { text: "1,2mg/kg", correct: false },
      { text: "0,8mg/kg", correct: false },
      { text: "1mg/kg", correct: false },
    ],
  },
  {
    question: "A 11-year-old child presents with fever, cough and wheezing. The child ill 4 days. On examination respiratory rate 30/min, dry cough, wheeze, fever 37,4˚C. CXR shows bilateral hyperinflation with normal WBC count. Which of the following is the most appropriate initial management?",
    answers: [
      { text: "Short acting β2 agonist", correct: true },
      { text: "Penicillin group antibiotic", correct: false },
      { text: "Aminoffiline", correct: false },
      { text: "Inhaled steroid", correct: false },
      { text: "Long acting β2 agonist", correct: false },
    ],
  },
  {
    question: "Oliguria in infants is a sign of the urine output equal:",
    answers: [
      { text: " 1.5ml / kg / h", correct: true },
      { text: " 0.1 ml / kg /h;", correct: false },
      { text: " 0.3 ml / kg /h", correct: false },
      { text: " 0.5 ml / kg /h;", correct: false },
      { text: " 0 ml / kg /h", correct: false },
    ],
  },
  {
    question: "A 4-year-old boy has steroid-resistant nephrotic syndrome. Biopsy shows focal segmental glomerulosclerosis . What drug is the drug of first choice for immunosuppressive therapy?",
    answers: [
      { text: " Cyclosporin A", correct: true },
      { text: " Azathioprine", correct: false },
      { text: " Prednisolone", correct: false },
      { text: " Chlorambucil", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 10-year-old boy was diagnosed with: \"Acute nephritic syndrome, debut active stage, kidney function preserved.\" Over a period of 6 months, despite ongoing therapy with enalapril 2.5 mg/ day , changes in urine tests persist: erythrocytes up to 50 per field of view, daily proteinuria up to 2.5 g/ day . Further diagnostic measures:",
    answers: [
      { text: " nephrobiopsy", correct: true },
      { text: " scintigraphy", correct: false },
      { text: " cystography", correct: false },
      { text: " tomography", correct: false },
      { text: " urography", correct: false },
    ],
  },
  {
    question: "8-year-old girl complaints of headache, weakness, changes in urinalysis: protein 0.9 g/l, leukocytes-6 in p/ sp ., erythrocytes - in large numbers. BP 140/100 (99 percentile). What drug should be prescribed to the girl as the initial stage of therapy while the additional examination is being carried out?",
    answers: [
      { text: " captopril", correct: true },
      { text: " clonidine", correct: false },
      { text: " furosemide", correct: false },
      { text: " amlodipine", correct: false },
      { text: " bisoprolol", correct: false },
    ],
  },
  {
    question: "A 10-year-old boy was admitted to the hospital with complaints of a change in the color of urine in the form of the color of \"cola\". BP130/90 mm Hg (95 percentile). Urine output is 0,3ml/kg/6-hrs. What complication has this patient?",
    answers: [
      { text: " Acute kidney injury", correct: true },
      { text: " Primary nephrotic syndrome", correct: false },
      { text: " Primary nephritic syndrome", correct: false },
      { text: " chronic kidney disease", correct: false },
      { text: " Secondary nephritic syndrome", correct: false },
    ],
  },
  {
    question: "A 6-year-old boy has face, extremity edema, ascities, BP - 90/60 mm Hg . 24-hours Urine protein collection test 4 g/24-hrs. Serum test: hypoproteinemia, hypercholesterolemia . What is your presumptive diagnosis ?",
    answers: [
      { text: " nephrotic syndrome", correct: true },
      { text: " nephritic syndrome", correct: false },
      { text: " chronic kidney disease", correct: false },
      { text: " acute kidney injury", correct: false },
      { text: " IgA nephritis", correct: false },
    ],
  },
  {
    question: "Girl 5 years old. Complaints about being tall compared to peers. A few days ago, for the first time, a discharge from the vagina of red color \"menstruation\" appeared. Objectively: height 135 cm, weight 26 kg. Sexual development according to Tanner: Ma IV, Ax IV, P IV. What diagnosis is most likely associated with tall stature in a child?",
    answers: [
      { text: "Precocious puberty", correct: true },
      { text: "Adrenogenital syndrome", correct: false },
      { text: "Chronic adrenal insufficiency", correct: false },
      { text: "Accelerated sexual development", correct: false },
      { text: "Violation of sex differentiation", correct: false },
    ],
  },
  {
    question: "The child is 5 years old, height and bone age corresponds to 4 years, lags behind in development, sexual development corresponds to 4 years. From the anamnesis, the mother's height is 150 cm, the father's height is 160 cm. STH growth hormone is normal. Your preliminary diagnosis:",
    answers: [
      { text: "Familial short stature", correct: true },
      { text: "Congenital hypothyroidism", correct: false },
      { text: "Cerebral pituitary dwarfism", correct: false },
      { text: "Shershevsky-Turner syndrome", correct: false },
      { text: "Syndrome of late puberty", correct: false },
    ],
  },
  {
    question: "A 6-day-old child was delivered to the intensive care unit in serious condition with obvious signs of dehydration. According to the mother, on the 2nd day after birth, the child developed indomitable vomiting with a “fountain”, diarrhea, and weakness. You suspect a salt-wasting form of adrenogenital syndrome. What hormone should be tested to clarify the diagnosis?",
    answers: [
      { text: "17-OH-progesterone", correct: true },
      { text: "Triiodothyronine", correct: false },
      { text: "Estradiol", correct: false },
      { text: "Testosterone", correct: false },
      { text: "Adrenocorticot", correct: false },
    ],
  },
  {
    question: "A 14-year-old boy complains of overweight, headaches, weakness, shortness of breath when walking fast, pain in the right side. Objectively: the pancreas is excessively developed in the area of the upper and lower extremities, abdomen, thighs, gynecomastia is noted. Waist 94 cm, weight 89 kg, BMI 33.9, blood pressure 145/90 mm Hg. The level of venous glucose on an empty stomach is 6.2 mmol / l. What test should be performed to clarify the diagnosis?",
    answers: [
      { text: "Glucose tolerant", correct: true },
      { text: "Hepatic", correct: false },
      { text: "Renal", correct: false },
      { text: "Helicobacter pylori", correct: false },
      { text: "Electrolyte", correct: false },
    ],
  },
  {
    question: "Normal count of reticulocytes is",
    answers: [
      { text: "2-12‰ ", correct: true },
      { text: " 0-1‰", correct: false },
      { text: "0‰ ", correct: false },
      { text: "20-25‰ ", correct: false },
      { text: "25-50‰ ", correct: false },
    ],
  },
  {
    question: "What factors may cause megaloblastic anemia? ",
    answers: [
      { text: "intrinsic factor deficiency", correct: true },
      { text: "extrinsic factor deficiency", correct: false },
      { text: "nan", correct: false },
      { text: "diet exsess in folic acid", correct: false },
      { text: "hronic blood loss ", correct: false },
    ],
  },
  {
    question: "Syntesis of hemoglobin S is representative for",
    answers: [
      { text: "sickle-cell anemia", correct: true },
      { text: "thalassemia", correct: false },
      { text: "rhombotocytosis", correct: false },
      { text: "ellyptocytosis", correct: false },
      { text: "spherocytosis", correct: false },
    ],
  },
  {
    question: "What enzyme deficiency in RBCs leads to ATP depletion and hemolytic anemia?",
    answers: [
      { text: "pyruvate kinase ", correct: true },
      { text: " dehydrogenase glucose 6-phosphate ", correct: false },
      { text: "sodium-potassium ATPase", correct: false },
      { text: "ATP-ase", correct: false },
      { text: "proteinase", correct: false },
    ],
  },
  {
    question: "What abnormal substance synthesis leads to microspherocytosis?",
    answers: [
      { text: "spectrin", correct: true },
      { text: "hemoglobin", correct: false },
      { text: "2,3-biphosphoglyceric acid ", correct: false },
      { text: "denaturine", correct: false },
      { text: "moduline", correct: false },
    ],
  },
  {
    question: "What abnormal substance synthesis leads to elliptocytosis? ",
    answers: [
      { text: "spectrin", correct: true },
      { text: "emoglobin А", correct: false },
      { text: "2,3-biphosphoglyceric acid", correct: false },
      { text: "denaturine", correct: false },
      { text: "moduline", correct: false },
    ],
  },
  {
    question: "In what anemia the count of reticulocytes is reduced?",
    answers: [
      { text: "in the aplastic anemia ", correct: true },
      { text: "in the acute posthemorrhagic anemia", correct: false },
      { text: "in the hemolytic anemia ", correct: false },
      { text: "in acute anemia", correct: false },
      { text: "In chronic anemia", correct: false },
    ],
  },
  {
    question: "What kind of anemia is the result of radiation sickness?",
    answers: [
      { text: "aplastic anemia ", correct: true },
      { text: "iron deficiency anemia", correct: false },
      { text: "hemolytic anemia ", correct: false },
      { text: "chronic anemia ", correct: false },
      { text: "acute anemia ", correct: false },
    ],
  },
  {
    question: "What kind of anemia is characterized by megaloblastic type of hemapoiesis?",
    answers: [
      { text: "vitamin В12-deficiency anemia ", correct: true },
      { text: " hemolytic anemia ", correct: false },
      { text: "chronic posthemorrhagic anemia ", correct: false },
      { text: "vitamin В1-deficiency anemia ", correct: false },
      { text: "vitamin B6 deficiency anemia", correct: false },
    ],
  },
  {
    question: "Manifestations in patients with hemolytic anemia are",
    answers: [
      { text: "splenomegaly", correct: true },
      { text: "cough", correct: false },
      { text: "increased levels of B6", correct: false },
      { text: "increased levels of free haptoglobin ", correct: false },
      { text: "increased levels of B1 ", correct: false },
    ],
  },
  {
    question: "What of the following is most likely developed if patient with DM1 glycemia has 2 mmol/L (40 mg/dL)? ",
    answers: [
      { text: "Hypoglycemic coma", correct: true },
      { text: "Ketoacidosis", correct: false },
      { text: "Lactic-acid coma", correct: false },
      { text: "Hyperglycemic Hyperosmolar Status (HHS)", correct: false },
      { text: "Hyperglycemic Ketoacidotic coma ", correct: false },
    ],
  },
  {
    question: "A 10-year-old boy complaints about constipation, cold intolerance, decreased attention span and sluggishness for the last six months. On exam reveals a diffusely enlarged, non-tender thyroid gland. In Labs there are decreased T4 and elevated TSH. Anti-microsomal and anti-thyroglobulin antibodies were strongly positive. What of the following is most likely the first choice treatment?  ",
    answers: [
      { text: "Levothyroxine", correct: true },
      { text: "Thyroidectomy", correct: false },
      { text: "Radioiodine therapy ", correct: false },
      { text: "Propylthiuracil", correct: false },
      { text: "Potassium iodate", correct: false },
    ],
  },
  {
    question: "8 days newborn's neonatal screening test shows an elevated TSH. Which of the followings is most likely have to prescribe to this baby? ",
    answers: [
      { text: "Levothyroxine sodium 50 mcg morning time per os", correct: true },
      { text: "Propranolol hydrochloride10 mg every 6 h per os", correct: false },
      { text: "Re-test of TSH in 4 weeks ", correct: false },
      { text: "Levothyroxine sodium 100 mcg 3 times per day", correct: false },
      { text: "Metimazole 5 mg 4 times a day per os ", correct: false },
    ],
  },
  {
    question: "13-y-o girl treated with symptoms of becoming irritable and emotionally instable, weight loss and neck swelling. Which of the following is most likely confirmed the diagnosis in this case? ",
    answers: [
      { text: "Reduced TSH; elevated T3 T4", correct: true },
      { text: "Normal TSH and T4", correct: false },
      { text: "Normal TSH; reduced T4", correct: false },
      { text: "Reduced TSH and T4 ", correct: false },
      { text: "Elevated TSH; reduced T3 T4", correct: false },
    ],
  },
  {
    question: "A 10-year-old boy has diagnosed Diabetic ketoacidosis. What of the following most likely absent in this patient?",
    answers: [
      { text: "Hypolipidemia", correct: true },
      { text: "Electrolyte depletion ", correct: false },
      { text: "Dehydration", correct: false },
      { text: "Hyperglycemia", correct: false },
      { text: "Acidosis ", correct: false },
    ],
  },
  {
    question: "A 7-year-old-girl with DM1 during 1 year has weakness, deep noisy breathing, hyperemic cheeks, and fruity odor from mouth. What of the following most likely is diagnosis? ",
    answers: [
      { text: "Diabetic Ketoacidosis ", correct: true },
      { text: "Bronchial asthma", correct: false },
      { text: "Diabetes insipidous", correct: false },
      { text: "Addison's disease", correct: false },
      { text: "Hypoglycemia", correct: false },
    ],
  },
  {
    question: "A 10 year old girl has become wasted, weakened, and frequent urination for 3 weeks. A random plasma glucose test reveals 190 mg/dL. What of the following most likely is presumptive diagnosis? ",
    answers: [
      { text: "Diabetes mellitus", correct: true },
      { text: "Hypopituitarism", correct: false },
      { text: "Hyperthyroidism ", correct: false },
      { text: "Diabetes insipidus ", correct: false },
      { text: "Hypoparathyroidism", correct: false },
    ],
  },
  {
    question: "9-year-old boy has no complaints. His mother has noticed hair lost, swelling neck. Objectively status is satisfactory, skin is dry, HR is 66, rhythmical. Thyroid glands enlarged up to 2d level, elastic in palpation. What of the following is the main cause this condition?",
    answers: [
      { text: "Iodine deficiency ", correct: true },
      { text: "Calcium deficiency ", correct: false },
      { text: "Iron deficiency ", correct: false },
      { text: "Phosphorus deficiency ", correct: false },
      { text: "Magnesium deficiency ", correct: false },
    ],
  },
  {
    question: "13-y-o girl with short stature, overweight, constipation, and cold intolerance was tested for thyroid function. Result's shown an elevated TSH. Which of the followings is most likely have to prescribe to this patient? ",
    answers: [
      { text: "Levothyroxine sodium 150 mcg morning time per os", correct: true },
      { text: "Propranolol hydrochloride10 mg every 6 h per os", correct: false },
      { text: "Prednisone 5 mg per day per os ", correct: false },
      { text: "Metimazole 5 mg 4 times a day per os", correct: false },
      { text: "Potassium iodate 150 mcg per day per os ", correct: false },
    ],
  },
  {
    question: "The 13-y-o girl has presented with overweight, decline interest in her hobby. On examination, weight was 50 kg; height was 151 cm. HR 60 bits/ min; RR 16 /min; BP–110/90 mmHg. Thyroid tissue was palpable over trachea. Protuberant abdomen. SMR: Ma3 P2. Which of the following study is most likely would be considered in the diagnosis of this case?",
    answers: [
      { text: "Extremely elevated Antibodies to thyroid peroxidase enzyme", correct: true },
      { text: "Absence of radioactive iodine uptake ", correct: false },
      { text: "Low urine iodine ", correct: false },
      { text: "Absent the thyroid on ultrasound ", correct: false },
      { text: "Craniopharyngioma on radiograph ", correct: false },
    ],
  },
  {
    question: "A 9-y-o girl has became nervous, wasting and increased appetite. HR 100 bits/ min; RR 26 /min; BP–125/55 mmHg. On exam was found the tremor of hands, wet skin, brittle hair, exophthalmos. Which of the following study is most likely would be considered in the diagnosis of this case?",
    answers: [
      { text: "Elevated serum free T4 and T3 levels.", correct: true },
      { text: "Positive anti-TPO antibodies", correct: false },
      { text: "TSH is elevated with low T4 and T3 levels.", correct: false },
      { text: "Mild elevations of TSH (below 10 mU/L) with normal free T4 level", correct: false },
      { text: "Multinodular goiter in sonography ", correct: false },
    ],
  },
  {
    question: "Intracranial calcification may be a feature of one of the following transplacental infections ",
    answers: [
      { text: "syphilis", correct: true },
      { text: "cytomegalovirus ", correct: false },
      { text: "herpes simplex virus ", correct: false },
      { text: "varicella-zoster virus ", correct: false },
      { text: " rubella ", correct: false },
    ],
  },
  {
    question: " Neonatal sepsis case fatality rate is highest for ",
    answers: [
      { text: "Group B streptococcus ", correct: true },
      { text: "Staphylococcus—coagulase negative ", correct: false },
      { text: "Candida albicans ", correct: false },
      { text: "Escherichia coli ", correct: false },
      { text: "Pseudomonas ", correct: false },
    ],
  },
  {
    question: " Osteitis may be a feature of one of the following transplacental infections ",
    answers: [
      { text: "rubella ", correct: true },
      { text: "cytomegalovirus ", correct: false },
      { text: "herpes simplex virus ", correct: false },
      { text: "varicella-zoster virus ", correct: false },
      { text: "T. gondii ", correct: false },
    ],
  },
  {
    question: "Limb hypoplasia may be a feature of the following transplacental infections ",
    answers: [
      { text: " cytomegalovirus ", correct: true },
      { text: "herpes simplex virus ", correct: false },
      { text: " varicella-zoster virus ", correct: false },
      { text: "HIV ", correct: false },
      { text: "rubella ", correct: false },
    ],
  },
  {
    question: " Common respiratory tract manifestations of neonatal bacterial infections is ",
    answers: [
      { text: "mastoiditis ", correct: true },
      { text: "ethmoiditis ", correct: false },
      { text: "otitis media ", correct: false },
      { text: "empyema ", correct: false },
      { text: "retropharyngeal cellulitis ", correct: false },
    ],
  },
  {
    question: "One of the following is not included in the definition of the systemic inflammatory response (SIRS) in neonates and pediatric patients ",
    answers: [
      { text: "cardiac dysfunction ", correct: true },
      { text: "temperature instability ", correct: false },
      { text: "abnormal white blood cell (WBC) count", correct: false },
      { text: "respiratory dysfunction ", correct: false },
      { text: "perfusion abnormalities ", correct: false },
    ],
  },
  {
    question: "Persistence of the umbilical cord beyond which time should prompt consideration of an underlying abnormality  ",
    answers: [
      { text: "40 days ", correct: true },
      { text: "10 days ", correct: false },
      { text: "20 days ", correct: false },
      { text: "30 days ", correct: false },
      { text: "50 days ", correct: false },
    ],
  },
  {
    question: " The MOST important risk factor for necrotizing enterocolitis (NEC) in preterm infants is ",
    answers: [
      { text: "apgar score ", correct: true },
      { text: " delivery by cesarean section  ", correct: false },
      { text: " breast feeding ", correct: false },
      { text: "gestational age and birth weight ", correct: false },
      { text: "exposure to glucocorticoids during the first week of life ", correct: false },
    ],
  },
  {
    question: "Which of the following is not a cause of hemolytic jaundice in newborns?",
    answers: [
      { text: "failure of phototherapy to lower serum bilirubin levels ", correct: true },
      { text: "bilirubin rise of >0.5 mg/dL/h ", correct: false },
      { text: "reticulocytosis >5% at birth ", correct: false },
      { text: "onset of jaundice before 24 hours of age ", correct: false },
      { text: "significant decrease in hemoglobin ", correct: false },
    ],
  },
  {
    question: "When screening for intraventricular hemorrhage IVH, the best time to perform an ultrasound is ",
    answers: [
      { text: " second day of life ", correct: true },
      { text: "first day of life ", correct: false },
      { text: "fifth day of life ", correct: false },
      { text: "third day of life ", correct: false },
      { text: " fourth day of life ", correct: false },
    ],
  },
  {
    question: "Which of the following is not an indication to start positive pressure breaths to a baby?",
    answers: [
      { text: "Shock", correct: true },
      { text: "HR < 100/mt", correct: false },
      { text: "Apnoea", correct: false },
      { text: "regular breathing", correct: false },
      { text: "Gasping breathing", correct: false },
    ],
  },
  {
    question: "A newborn baby is born with meconium stained liquor and is depressed at birth. Which action will you start?",
    answers: [
      { text: "suction oral cavity", correct: true },
      { text: "warm the baby", correct: false },
      { text: "ventilation", correct: false },
      { text: "chest comtression", correct: false },
      { text: "stimulation", correct: false },
    ],
  },
  {
    question: "During resuscitation of a newborn, you've establish adequate ventilation with an endotracheal tube and your colleague has begun chest compressions for a heart rate under 60 bpm. Nevertheless, after 60 seconds, the heart rate has not increased. What is the most appropriate next step in management?*",
    answers: [
      { text: "Administer epinephrine.", correct: true },
      { text: "Discontinue chest compressions.", correct: false },
      { text: "Start dopamine infusion.", correct: false },
      { text: "Stimulate the newborn.", correct: false },
      { text: "dry the baby", correct: false },
    ],
  },
  {
    question: "Тhe child after birth is blue,  is not breathing, lethargic, single heartbeat. How many points on the Apgar score in 1st minute.",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "The child after birth is blue,   breathing is irregular, lethargic,  heartbeat is 90 beats per minute. How many points on the Apgar score in 1st minute.",
    answers: [
      { text: "2", correct: true },
      { text: "1", correct: false },
      { text: "5", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: " In 5 minute after resuscitation the child is pink but has acrocyanosis,   breathing is irregular, lethargic,  heartbeat is 140 beats per minute. How many points on the Apgar score in 5 minute.",
    answers: [
      { text: "4", correct: true },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "The child after birth is blue,   breathing is irregular, lethargic,  heartbeat is 126 beats per minute. How many points on the Apgar score in 5 minute.",
    answers: [
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "5", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "What is the duration of seconadry prophylaxis of ARF without carditis in children?",
    answers: [
      { text: "5 years", correct: true },
      { text: "1 year", correct: false },
      { text: "3 years", correct: false },
      { text: "15 years", correct: false },
      { text: "10 years", correct: false },
    ],
  },
  {
    question: "Hypoxic spell is assosiated with",
    answers: [
      { text: "TF", correct: true },
      { text: "CA", correct: false },
      { text: "VCD", correct: false },
      { text: "PDA", correct: false },
      { text: "ACD", correct: false },
    ],
  },
  {
    question: "In the diagnosis of Acute Rheumatic Fever, which of the following may be helpful? ",
    answers: [
      { text: "Polyarthritis ", correct: true },
      { text: "A generalized macular- papular rash", correct: false },
      { text: "ASO titer of less than 1:200", correct: false },
      { text: "Splinter hemorrhages", correct: false },
      { text: "Staphylococcus aureus grown on throat culture", correct: false },
    ],
  },
  {
    question: "A 10-year-old girl is being evaluated for fatigue, subfebrile fever and left elbow pain. She has been feeling fatige over past 2 weeks. Her left elbow has been swolen and tender for 2 days. She reports about similar event occured with her right knee one week ago and resolved on its own. Two month ago she had a sore throat. Objectively: her VS are withing the normal. She has blowing holosustolic murmur at the apex. Her left elbow is swolen and tender in palpation. What is more likely diagnosis?",
    answers: [
      { text: "Acute Rheumatic Fever", correct: true },
      { text: "Juvenile Rheumatoid Arthritis", correct: false },
      { text: "Septic Arthritis", correct: false },
      { text: "Acute poststreptococcal arthritis ", correct: false },
      { text: "Brucella Infection", correct: false },
    ],
  },
  {
    question: "On examination of 11-year-old girl the blowing systolic murmur at the apex was evaluated. She reports about swolen left knee 2 days before, fatigue and subfebrile fever.  What is the more likely findings in the anamnesis? ",
    answers: [
      { text: "Two month ago she had a sore throat.", correct: true },
      { text: "Two monthe ago she had a headacke", correct: false },
      { text: "Two month ago she had a trauma of the knee.", correct: false },
      { text: "Two month ago she contacted with TBS patient", correct: false },
      { text: "Two month ago she had pneumonia", correct: false },
    ],
  },
  {
    question: "An 8-year-old girl  is being evaluated for weakness, prolonged subfebrile fever and left knee pain. She has been feeling fatige over past 2 weeks. Her left knee has been swolen and tender for 3 days. She reports about similar event occured with her right elbow one week ago and resolved on its own. Recently she had a sore throat. Objectively: Well-developed, alert girl. Hervital signs are withing the normal. She has blowing holosystolic murmur at the apex. Her left knee is swolen and tender in palpation. What is more likely diagnosis?",
    answers: [
      { text: "Acute Rheumatic Fever", correct: true },
      { text: "Juvenile Rheumatoid Arthritis", correct: false },
      { text: "Brucella Infection", correct: false },
      { text: "Acute poststreptococcal arthritis ", correct: false },
      { text: "Septic Arthritis", correct: false },
    ],
  },
  {
    question: "A 14-year-old boy is being evaluated for fatigue, subfebrile fever and left knee pain. He has been feeling fatige over past 2 weeks. His left elbow has been swolen and tender for 3 days. He reports about similar event occured with her right knee one week ago and resolved on its own. Two month ago h suffered from a sore throat. Objectively: his Vtal Signs are withing the normal.  In auscultation blowing holosustolic murmur at the apex was revealed. His left knee is swolen and tender in palpation. What is more likely diagnosis?",
    answers: [
      { text: "Acute Rheumatic Fever", correct: true },
      { text: "Juvenile Rheumatoid Arthritis", correct: false },
      { text: "Septic Arthritis", correct: false },
      { text: "Henoch-Schönlein purpura", correct: false },
      { text: "Brucella Infection", correct: false },
    ],
  },
  {
    question: "A 12-year-old boy is being evaluated for fatigue, involuntary twitching of face nuscles, anccordinated movements of legs and arms. His parents report about recurrent sore throat infections. What are the most likely investigations should be done to determine the diagnosis?",
    answers: [
      { text: "Rapid streptococcal test; ESR; CRP;    ECHO-KG test;", correct: true },
      { text: "Rapid streptococcal test; ESR; CRP; EEG test; ", correct: false },
      { text: "CBC test;              EEG test; Brain IMR test; CRP test", correct: false },
      { text: "   CBC test; ECG; ASO test; ANA test", correct: false },
      { text: "CBC test; ECG; Brain IMR; ANA test", correct: false },
    ],
  },
  {
    question: "A 12-year-old boy is being evaluated for fatigue, involuntary twitching of face nuscles, anccordinated movements of legs and arms. His parents report about recurrent sore throat infections. Antistreptolysin O test is 1:360; ESR - 40 mm per hour. What is obligatory examination to be performed: ",
    answers: [
      { text: "ECHO-KG", correct: true },
      { text: "Brain IMR", correct: false },
      { text: "Chest X Ray", correct: false },
      { text: "EEG", correct: false },
      { text: "ECG", correct: false },
    ],
  },
  {
    question: "An 8-year-old girl  is being evaluated for weakness, prolonged subfebrile fever and left knee pain. She has been feeling fatige over past 2 weeks. Her left knee has been swolen and tender for 3 days. She reports about similar event occured with her right elbow one week ago and resolved on its own. Recently she had a sore throat. Objectively: Well-developed, alert girl. Hervital signs are withing the normal. She has blowing holosystolic murmur at the apex. Her left knee is swolen and tender in palpation. What is more likely additional laboratory investigation to confirm your diagnosis?",
    answers: [
      { text: "ASO test", correct: true },
      { text: "ANA test", correct: false },
      { text: "Blood culture test", correct: false },
      { text: "Serum agglutination test", correct: false },
      { text: "CBC test", correct: false },
    ],
  },
  {
    question: "An 8-year-old girl  is being evaluated for weakness, prolonged subfebrile fever and left knee pain. She has been feeling fatige over past 2 weeks. Her left knee has been swolen and tender for 3 days. She reports about similar event occured with her right elbow one week ago and resolved on its own. Recently she had a sore throat. Objectively: Well-developed, alert girl. Hervital signs are withing the normal. She has blowing holosystolic murmur at the apex. Her left knee is swolen and tender in palpation. Of the following, in addition to a cardiology referral, the MOST appropriate next step in management for this girl is:",
    answers: [
      { text: "aspirin and penicillin orally", correct: true },
      { text: "aspirin orally and intravenous immunoglobulin", correct: false },
      { text: "penicillin and glucocorticoids orally", correct: false },
      { text: " penicillin orally and intravenous immunoglobulin", correct: false },
      { text: "glucocorticoids orally and intravenous  immunoglobulin", correct: false },
    ],
  },
  {
    question: "A healthy term neonate, was noted to be cyanosed at 6 hours of age. There was no breathlessness and the baby had taken a feed. On examination, there was a soft systolic murmur. Pulse oximetry showed an oxygen saturation of 66%. After oxygen therapy what is most likely step in management? ",
    answers: [
      { text: "Precautionary prostaglandin E2 infusion", correct: true },
      { text: "Immediate Indometacin infusion", correct: false },
      { text: "Precoutionary dobutamin infusion", correct: false },
      { text: "Precoutionary epinephrin infusion", correct: false },
      { text: "Precoutionary Ampicillyn infusion ", correct: false },
    ],
  },
  {
    question: "After ARVI 2 weeks ago, a 10-year-old boy represent dyspnea on unsignificat phisical activity. Obejctively: normostenic, pale skin, HR – 110 per minute, BP - 90/55 mm Hg. Borders of relative cardiac dullness: Right - upper parasternal line - ІІІ rib, Left - 1.0 cm outward from the mid-clavicular line. In auscultation - muffled heart sounds, no murmur; moist rales in the lower lung fields. From the following, what is the most accurate method of examination to determine the diagnosis?",
    answers: [
      { text: "Echo-CG", correct: true },
      { text: "Chest X-Ray", correct: false },
      { text: "Chest CT scan", correct: false },
      { text: "ECG", correct: false },
      { text: "Peak flowmetry", correct: false },
    ],
  },
  {
    question: "A healthy term neonate, was noted to be cyanosed at the second day of age. On examination, there were no murmur and no respiratory distress. On the third day, the cyanosis became more obvious and tachypnea was noted. Of the following, in addition to a cardiosurgery referral, the MOST appropriate treatment should be done:",
    answers: [
      { text: "Prostoglandin E 2 infusion", correct: true },
      { text: "Dexamethazone infusion ", correct: false },
      { text: "Epinephrin infusion", correct: false },
      { text: "Indometacin infusion", correct: false },
      { text: "Dobutamin infusion", correct: false },
    ],
  },
  {
    question: "Name of the metabolite of vitamin D,which is formed in the kidneys:",
    answers: [
      { text: "1,25-dioxycalciferol", correct: true },
      { text: "25-hydroxycalciferol", correct: false },
      { text: "7-dehydrfocholesterol", correct: false },
      { text: "20-hydroxycalciferol", correct: false },
      { text: "24,25-dioxycalciferol", correct: false },
    ],
  },
  {
    question: "A 4 year old boy is brought to the clinic by his mother, who reports that he has lost weight and has been feeling weak and tired.On physical examination, the child appears emaciated and has dry, scaly skin.Laboratory tests reveal a low serum albumin level.What is the most likely diagnosis?",
    answers: [
      { text: "marasmus", correct: true },
      { text: "kwashiorkor", correct: false },
      { text: "cystic fibrosis", correct: false },
      { text: "iron deficiency anemia", correct: false },
      { text: "pellagra", correct: false },
    ],
  },
  {
    question: "A 3-year-old child is brought to the emergency department with vomiting, diarrhea, and abdominal pain. Laboratory investigations reveal a hemoglobin level of 9 g/dL, MCV of 80 fL, and serum ferritin level of 30 ng/mL. What is the most likely cause of anemia in this child?",
    answers: [
      { text: "Anemia of chronic disease", correct: true },
      { text: "Iron deficiency anemia", correct: false },
      { text: "Hemolytic anemia", correct: false },
      { text: "Megaloblastic anemia", correct: false },
      { text: "physiologic anemia", correct: false },
    ],
  },
  {
    question: "Which of the following laboratory tests is NOT useful in diagnosing rickets in children?",
    answers: [
      { text: "Serum iron", correct: true },
      { text: "Serum calcium", correct: false },
      { text: "Serum phosphate", correct: false },
      { text: "Serum vitamin D", correct: false },
      { text: "alkaline phosphotase", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a common cause of iron deficiency anemia in children?",
    answers: [
      { text: "increased iron absorbtion due to excessive consumption of iron-rich foods", correct: true },
      { text: "inadequate dietary intake of iron", correct: false },
      { text: "chronic blood loss", correct: false },
      { text: "genetic predisposition of iron deficiency", correct: false },
      { text: "parasitic infection", correct: false },
    ],
  },
  {
    question: "Which of the following laboratory findings is consistent with iron deficiency anemia in children?",
    answers: [
      { text: "elevated MCV level", correct: true },
      { text: "elevated ferritin level", correct: false },
      { text: "elevated HB level", correct: false },
      { text: "elevated serum iron", correct: false },
      { text: "elevated reticulocyte count", correct: false },
    ],
  },
  {
    question: "Which of the following is the recommended duration of treatment for severe acute malnutrition (SAM) in children?",
    answers: [
      { text: "12 weeks", correct: true },
      { text: "2 weeks", correct: false },
      { text: "6 weeks", correct: false },
      { text: "3 weeks", correct: false },
      { text: "16 weeks", correct: false },
    ],
  },
  {
    question: "In evaluating the cause of rickets, which test is convenient if malabsorption is a consideration?",
    answers: [
      { text: "PT", correct: true },
      { text: "PTT", correct: false },
      { text: "stool pH", correct: false },
      { text: "barium study", correct: false },
      { text: "hydrogen breath test", correct: false },
    ],
  },
  {
    question: "Which method is needed to determine the vitamin D status of a patient?",
    answers: [
      { text: "25-hydroxy vitamin D level", correct: true },
      { text: "25-hydroxylase leve", correct: false },
      { text: "PTH level", correct: false },
      { text: "1, 25-dihydroxy vitamin D level", correct: false },
      { text: "D-binding protein", correct: false },
    ],
  },
  {
    question: "A clearly expressed craniotabes was found in a child at the age of 10 days: Which of the following should be done?",
    answers: [
      { text: "determine Ca, P, alkaline phosphatase", correct: true },
      { text: "confine oneself to observation", correct: false },
      { text: "take an x-ray of the skull", correct: false },
      { text: "immediately prescribe vitamin D up to 500 IU per day", correct: false },
      { text: "prescribe calcium supplements", correct: false },
    ],
  },
  {
    question: "A 2-year-old girl is brought tio the clinic by her parents,who report that she has been losing weight and has not been growing well.On physical examination,the child appears thin and has dry,brittle hair. Laboratory tests reveal a low serum albumin level and a low serum transferrin level. What is the most likely diagnosis?",
    answers: [
      { text: "kwashiorkor", correct: true },
      { text: "marasmus", correct: false },
      { text: "rickets", correct: false },
      { text: "cystic fibrosis", correct: false },
      { text: "iron deficiency anemia", correct: false },
    ],
  },
  {
    question: "Which of the following is the recommended duration of treatment for severe acute malnutrition (SAM) in children?",
    answers: [
      { text: "12 weeks", correct: true },
      { text: "2 weeks", correct: false },
      { text: "6 weeks", correct: false },
      { text: "3 weeks", correct: false },
      { text: "16 weeks", correct: false },
    ],
  },
  {
    question: "Which of the following is a recommended strategy for preventing hypovitaminosis A in at-risk populations?",
    answers: [
      { text: "Excessive intake of vitamin A supplements", correct: true },
      { text: "Vitamin A fortification of staple foods", correct: false },
      { text: "Mass distribution of vitamin A supplements", correct: false },
      { text: "Encouraging consumption of vitamin A-rich foods", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "A 3-year-old boy is brought to the clinic by his parents,who report that he has been losing weight and has been experiencing recurrent infections. On physical examination,the child appears thin and has pale conjunctiva. Laboratory tests reveal a low serum iron level and a low serum ferritin level. What is most likely diagnosis?",
    answers: [
      { text: "iron deficiency anemia", correct: true },
      { text: "marasmus", correct: false },
      { text: "rickets", correct: false },
      { text: "kwashiorkor", correct: false },
      { text: "cystic fibrosis", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
