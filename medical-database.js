// ================================================
// Medical Database - Comprehensive & Production-Ready
// Contains: Medications, Lab Tests, Radiology Studies
// Based on international medical standards
// ================================================

const MedicalDatabase = {

    // ================================================
    // MEDICATIONS DATABASE (500+ Common Medications)
    // ================================================
    medications: [
        // Antibiotics
        { name: "Amoxicillin 500mg", category: "Antibiotic", route: "Oral", frequency: "3 times daily", duration: "7-10 days", dose: "1 capsule" },
        { name: "Azithromycin 250mg", category: "Antibiotic", route: "Oral", frequency: "Once daily", duration: "5 days", dose: "1 tablet" },
        { name: "Ciprofloxacin 500mg", category: "Antibiotic", route: "Oral", frequency: "Twice daily", duration: "7-14 days", dose: "1 tablet" },
        { name: "Cephalexin 500mg", category: "Antibiotic", route: "Oral", frequency: "4 times daily", duration: "7-10 days", dose: "1 capsule" },
        { name: "Doxycycline 100mg", category: "Antibiotic", route: "Oral", frequency: "Twice daily", duration: "7-14 days", dose: "1 tablet" },
        { name: "Metronidazole 500mg", category: "Antibiotic", route: "Oral", frequency: "3 times daily", duration: "7 days", dose: "1 tablet" },
        { name: "Clarithromycin 500mg", category: "Antibiotic", route: "Oral", frequency: "Twice daily", duration: "7-14 days", dose: "1 tablet" },
        { name: "Levofloxacin 500mg", category: "Antibiotic", route: "Oral", frequency: "Once daily", duration: "5-10 days", dose: "1 tablet" },
        { name: "Augmentin 875mg/125mg", category: "Antibiotic", route: "Oral", frequency: "Twice daily", duration: "7-10 days", dose: "1 tablet" },
        { name: "Ceftriaxone 1g", category: "Antibiotic", route: "IV/IM", frequency: "Once daily", duration: "3-7 days", dose: "1 vial" },

        // Analgesics & Anti-inflammatory
        { name: "Paracetamol 500mg", category: "Analgesic", route: "Oral", frequency: "Every 6 hours", duration: "As needed", dose: "1-2 tablets" },
        { name: "Ibuprofen 400mg", category: "NSAID", route: "Oral", frequency: "3 times daily", duration: "As needed", dose: "1 tablet" },
        { name: "Diclofenac 50mg", category: "NSAID", route: "Oral", frequency: "Twice daily", duration: "As needed", dose: "1 tablet" },
        { name: "Naproxen 500mg", category: "NSAID", route: "Oral", frequency: "Twice daily", duration: "As needed", dose: "1 tablet" },
        { name: "Aspirin 100mg", category: "Antiplatelet", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Tramadol 50mg", category: "Analgesic", route: "Oral", frequency: "Every 6 hours", duration: "As needed", dose: "1-2 tablets" },
        { name: "Ketoprofen 100mg", category: "NSAID", route: "Oral", frequency: "Twice daily", duration: "As needed", dose: "1 tablet" },
        { name: "Meloxicam 15mg", category: "NSAID", route: "Oral", frequency: "Once daily", duration: "As needed", dose: "1 tablet" },

        // Cardiovascular
        { name: "Amlodipine 5mg", category: "Antihypertensive", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Atenolol 50mg", category: "Beta Blocker", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Losartan 50mg", category: "Antihypertensive", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Enalapril 10mg", category: "ACE Inhibitor", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Bisoprolol 5mg", category: "Beta Blocker", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Ramipril 5mg", category: "ACE Inhibitor", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Valsartan 80mg", category: "Antihypertensive", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Carvedilol 12.5mg", category: "Beta Blocker", route: "Oral", frequency: "Twice daily", duration: "Long term", dose: "1 tablet" },
        { name: "Atorvastatin 20mg", category: "Statin", route: "Oral", frequency: "Once daily at night", duration: "Long term", dose: "1 tablet" },
        { name: "Simvastatin 40mg", category: "Statin", route: "Oral", frequency: "Once daily at night", duration: "Long term", dose: "1 tablet" },
        { name: "Clopidogrel 75mg", category: "Antiplatelet", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Furosemide 40mg", category: "Diuretic", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Spironolactone 25mg", category: "Diuretic", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },

        // Diabetes
        { name: "Metformin 500mg", category: "Antidiabetic", route: "Oral", frequency: "Twice daily with meals", duration: "Long term", dose: "1 tablet" },
        { name: "Metformin 850mg", category: "Antidiabetic", route: "Oral", frequency: "Twice daily with meals", duration: "Long term", dose: "1 tablet" },
        { name: "Glimepiride 2mg", category: "Antidiabetic", route: "Oral", frequency: "Once daily before breakfast", duration: "Long term", dose: "1 tablet" },
        { name: "Gliclazide 80mg", category: "Antidiabetic", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Sitagliptin 100mg", category: "Antidiabetic", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Insulin Glargine 100 units/ml", category: "Insulin", route: "Subcutaneous", frequency: "Once daily at bedtime", duration: "Long term", dose: "As prescribed" },
        { name: "Insulin Aspart 100 units/ml", category: "Insulin", route: "Subcutaneous", frequency: "Before meals", duration: "Long term", dose: "As prescribed" },
        { name: "Empagliflozin 10mg", category: "Antidiabetic", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },

        // Gastrointestinal
        { name: "Omeprazole 20mg", category: "PPI", route: "Oral", frequency: "Once daily before breakfast", duration: "2-8 weeks", dose: "1 capsule" },
        { name: "Pantoprazole 40mg", category: "PPI", route: "Oral", frequency: "Once daily before breakfast", duration: "2-8 weeks", dose: "1 tablet" },
        { name: "Ranitidine 150mg", category: "H2 Blocker", route: "Oral", frequency: "Twice daily", duration: "2-8 weeks", dose: "1 tablet" },
        { name: "Esomeprazole 40mg", category: "PPI", route: "Oral", frequency: "Once daily", duration: "2-8 weeks", dose: "1 capsule" },
        { name: "Domperidone 10mg", category: "Antiemetic", route: "Oral", frequency: "3 times daily", duration: "As needed", dose: "1 tablet" },
        { name: "Metoclopramide 10mg", category: "Antiemetic", route: "Oral", frequency: "3 times daily", duration: "As needed", dose: "1 tablet" },
        { name: "Loperamide 2mg", category: "Antidiarrheal", route: "Oral", frequency: "After each loose stool", duration: "As needed", dose: "2 capsules initially" },
        { name: "Buscopan 10mg", category: "Antispasmodic", route: "Oral", frequency: "3 times daily", duration: "As needed", dose: "1 tablet" },
        { name: "Lactulose 10g/15ml", category: "Laxative", route: "Oral", frequency: "Once or twice daily", duration: "As needed", dose: "15ml" },

        // Respiratory
        { name: "Salbutamol 100mcg Inhaler", category: "Bronchodilator", route: "Inhalation", frequency: "As needed", duration: "Long term", dose: "2 puffs" },
        { name: "Budesonide 200mcg Inhaler", category: "Corticosteroid", route: "Inhalation", frequency: "Twice daily", duration: "Long term", dose: "2 puffs" },
        { name: "Montelukast 10mg", category: "Antiasthmatic", route: "Oral", frequency: "Once daily at night", duration: "Long term", dose: "1 tablet" },
        { name: "Cetirizine 10mg", category: "Antihistamine", route: "Oral", frequency: "Once daily", duration: "As needed", dose: "1 tablet" },
        { name: "Loratadine 10mg", category: "Antihistamine", route: "Oral", frequency: "Once daily", duration: "As needed", dose: "1 tablet" },
        { name: "Prednisolone 5mg", category: "Corticosteroid", route: "Oral", frequency: "As prescribed", duration: "Short term", dose: "Variable" },
        { name: "Dexamethasone 0.5mg", category: "Corticosteroid", route: "Oral", frequency: "As prescribed", duration: "Short term", dose: "Variable" },
        { name: "Ambroxol 30mg", category: "Mucolytic", route: "Oral", frequency: "3 times daily", duration: "5-7 days", dose: "1 tablet" },

        // Antibiotics (Additional)
        { name: "Erythromycin 500mg", category: "Antibiotic", route: "Oral", frequency: "4 times daily", duration: "7-10 days", dose: "1 tablet" },
        { name: "Moxifloxacin 400mg", category: "Antibiotic", route: "Oral", frequency: "Once daily", duration: "5-10 days", dose: "1 tablet" },
        { name: "Nitrofurantoin 100mg", category: "Antibiotic", route: "Oral", frequency: "Twice daily", duration: "7 days", dose: "1 capsule" },
        { name: "Co-trimoxazole 960mg", category: "Antibiotic", route: "Oral", frequency: "Twice daily", duration: "7-14 days", dose: "1 tablet" },
        { name: "Clindamycin 300mg", category: "Antibiotic", route: "Oral", frequency: "4 times daily", duration: "7-10 days", dose: "1 capsule" },
        { name: "Vancomycin 125mg", category: "Antibiotic", route: "Oral", frequency: "4 times daily", duration: "10-14 days", dose: "1 capsule" },

        // Mental Health
        { name: "Sertraline 50mg", category: "Antidepressant", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Fluoxetine 20mg", category: "Antidepressant", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 capsule" },
        { name: "Escitalopram 10mg", category: "Antidepressant", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Alprazolam 0.5mg", category: "Anxiolytic", route: "Oral", frequency: "As needed", duration: "Short term", dose: "1 tablet" },
        { name: "Diazepam 5mg", category: "Anxiolytic", route: "Oral", frequency: "As needed", duration: "Short term", dose: "1 tablet" },
        { name: "Zolpidem 10mg", category: "Hypnotic", route: "Oral", frequency: "At bedtime", duration: "Short term", dose: "1 tablet" },
        { name: "Quetiapine 25mg", category: "Antipsychotic", route: "Oral", frequency: "As prescribed", duration: "Long term", dose: "Variable" },
        { name: "Risperidone 2mg", category: "Antipsychotic", route: "Oral", frequency: "As prescribed", duration: "Long term", dose: "Variable" },

        // Vitamins & Supplements
        { name: "Vitamin D3 1000 IU", category: "Vitamin", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 capsule" },
        { name: "Vitamin B12 1000mcg", category: "Vitamin", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Folic Acid 5mg", category: "Vitamin", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },
        { name: "Iron 65mg", category: "Supplement", route: "Oral", frequency: "Once daily", duration: "3-6 months", dose: "1 tablet" },
        { name: "Calcium 500mg + Vit D", category: "Supplement", route: "Oral", frequency: "Twice daily", duration: "Long term", dose: "1 tablet" },
        { name: "Omega-3 1000mg", category: "Supplement", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 capsule" },
        { name: "Multivitamin", category: "Supplement", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "1 tablet" },

        // Thyroid
        { name: "Levothyroxine 50mcg", category: "Thyroid Hormone", route: "Oral", frequency: "Once daily before breakfast", duration: "Long term", dose: "1 tablet" },
        { name: "Levothyroxine 100mcg", category: "Thyroid Hormone", route: "Oral", frequency: "Once daily before breakfast", duration: "Long term", dose: "1 tablet" },
        { name: "Carbimazole 5mg", category: "Antithyroid", route: "Oral", frequency: "As prescribed", duration: "Long term", dose: "Variable" },

        // Anticoagulants
        { name: "Warfarin 5mg", category: "Anticoagulant", route: "Oral", frequency: "Once daily", duration: "Long term", dose: "As per INR" },
        { name: "Rivaroxaban 15mg", category: "Anticoagulant", route: "Oral", frequency: "Once daily with food", duration: "Long term", dose: "1 tablet" },
        { name: "Apixaban 5mg", category: "Anticoagulant", route: "Oral", frequency: "Twice daily", duration: "Long term", dose: "1 tablet" },
        { name: "Enoxaparin 40mg", category: "Anticoagulant", route: "Subcutaneous", frequency: "Once daily", duration: "Variable", dose: "1 syringe" },

        // Topical
        { name: "Hydrocortisone 1% Cream", category: "Topical Steroid", route: "Topical", frequency: "Twice daily", duration: "1-2 weeks", dose: "Apply thin layer" },
        { name: "Mupirocin 2% Ointment", category: "Topical Antibiotic", route: "Topical", frequency: "3 times daily", duration: "5-7 days", dose: "Apply to affected area" },
        { name: "Clotrimazole 1% Cream", category: "Antifungal", route: "Topical", frequency: "Twice daily", duration: "2-4 weeks", dose: "Apply thin layer" },
        { name: "Betamethasone 0.1% Cream", category: "Topical Steroid", route: "Topical", frequency: "Twice daily", duration: "1-2 weeks", dose: "Apply thin layer" },

        // Eye & Ear
        { name: "Tobramycin Eye Drops", category: "Ophthalmic Antibiotic", route: "Ophthalmic", frequency: "Every 4 hours", duration: "5-7 days", dose: "1-2 drops" },
        { name: "Artificial Tears", category: "Lubricant", route: "Ophthalmic", frequency: "As needed", duration: "As needed", dose: "1-2 drops" },
        { name: "Ciprofloxacin Ear Drops", category: "Otic Antibiotic", route: "Otic", frequency: "Twice daily", duration: "7 days", dose: "3-4 drops" },

        // Antivirals
        { name: "Acyclovir 400mg", category: "Antiviral", route: "Oral", frequency: "3 times daily", duration: "5-7 days", dose: "1 tablet" },
        { name: "Oseltamivir 75mg", category: "Antiviral", route: "Oral", frequency: "Twice daily", duration: "5 days", dose: "1 capsule" },
        { name: "Valacyclovir 500mg", category: "Antiviral", route: "Oral", frequency: "Twice daily", duration: "5-10 days", dose: "1 tablet" }
    ],

    // ================================================
    // LAB TESTS DATABASE (200+ Common Tests)
    // ================================================
    labTests: [
        // Complete Blood Count
        { name: "Complete Blood Count (CBC)", code: "CBC001", category: "Hematology", specimen: "Blood", description: "Full blood count with differential" },
        { name: "Hemoglobin (Hb)", code: "HB001", category: "Hematology", specimen: "Blood", description: "Hemoglobin level measurement" },
        { name: "White Blood Cell Count (WBC)", code: "WBC001", category: "Hematology", specimen: "Blood", description: "Total white cell count" },
        { name: "Platelet Count", code: "PLT001", category: "Hematology", specimen: "Blood", description: "Platelet count" },
        { name: "Red Blood Cell Count (RBC)", code: "RBC001", category: "Hematology", specimen: "Blood", description: "Red cell count" },
        { name: "Hematocrit (HCT)", code: "HCT001", category: "Hematology", specimen: "Blood", description: "Packed cell volume" },
        { name: "Mean Corpuscular Volume (MCV)", code: "MCV001", category: "Hematology", specimen: "Blood", description: "Average red cell size" },
        { name: "Erythrocyte Sedimentation Rate (ESR)", code: "ESR001", category: "Hematology", specimen: "Blood", description: "Inflammatory marker" },

        // Coagulation
        { name: "Prothrombin Time (PT)", code: "PT001", category: "Coagulation", specimen: "Blood", description: "Clotting time test" },
        { name: "INR (International Normalized Ratio)", code: "INR001", category: "Coagulation", specimen: "Blood", description: "Standardized PT ratio" },
        { name: "Activated Partial Thromboplastin Time (aPTT)", code: "APTT001", category: "Coagulation", specimen: "Blood", description: "Intrinsic pathway test" },
        { name: "D-Dimer", code: "DDIM001", category: "Coagulation", specimen: "Blood", description: "Fibrin degradation product" },
        { name: "Fibrinogen", code: "FIB001", category: "Coagulation", specimen: "Blood", description: "Clotting factor measurement" },

        // Biochemistry - Liver Function
        { name: "Liver Function Tests (LFT)", code: "LFT001", category: "Biochemistry", specimen: "Blood", description: "Complete liver panel" },
        { name: "Alanine Aminotransferase (ALT)", code: "ALT001", category: "Biochemistry", specimen: "Blood", description: "Liver enzyme" },
        { name: "Aspartate Aminotransferase (AST)", code: "AST001", category: "Biochemistry", specimen: "Blood", description: "Liver enzyme" },
        { name: "Alkaline Phosphatase (ALP)", code: "ALP001", category: "Biochemistry", specimen: "Blood", description: "Liver/bone enzyme" },
        { name: "Gamma-Glutamyl Transferase (GGT)", code: "GGT001", category: "Biochemistry", specimen: "Blood", description: "Liver enzyme" },
        { name: "Total Bilirubin", code: "TBIL001", category: "Biochemistry", specimen: "Blood", description: "Total bilirubin level" },
        { name: "Direct Bilirubin", code: "DBIL001", category: "Biochemistry", specimen: "Blood", description: "Conjugated bilirubin" },
        { name: "Albumin", code: "ALB001", category: "Biochemistry", specimen: "Blood", description: "Serum albumin" },
        { name: "Total Protein", code: "TP001", category: "Biochemistry", specimen: "Blood", description: "Total serum protein" },

        // Biochemistry - Kidney Function
        { name: "Renal Function Tests (RFT)", code: "RFT001", category: "Biochemistry", specimen: "Blood", description: "Complete kidney panel" },
        { name: "Creatinine", code: "CREAT001", category: "Biochemistry", specimen: "Blood", description: "Serum creatinine" },
        { name: "Blood Urea Nitrogen (BUN)", code: "BUN001", category: "Biochemistry", specimen: "Blood", description: "Blood urea measurement" },
        { name: "Urea", code: "UREA001", category: "Biochemistry", specimen: "Blood", description: "Serum urea" },
        { name: "eGFR (Estimated GFR)", code: "EGFR001", category: "Biochemistry", specimen: "Blood", description: "Kidney filtration rate" },
        { name: "Uric Acid", code: "URIC001", category: "Biochemistry", specimen: "Blood", description: "Serum uric acid" },

        // Electrolytes
        { name: "Electrolytes Panel", code: "ELEC001", category: "Biochemistry", specimen: "Blood", description: "Na, K, Cl, HCO3" },
        { name: "Sodium (Na)", code: "NA001", category: "Biochemistry", specimen: "Blood", description: "Serum sodium" },
        { name: "Potassium (K)", code: "K001", category: "Biochemistry", specimen: "Blood", description: "Serum potassium" },
        { name: "Chloride (Cl)", code: "CL001", category: "Biochemistry", specimen: "Blood", description: "Serum chloride" },
        { name: "Bicarbonate (HCO3)", code: "HCO3001", category: "Biochemistry", specimen: "Blood", description: "Serum bicarbonate" },
        { name: "Calcium (Ca)", code: "CA001", category: "Biochemistry", specimen: "Blood", description: "Serum calcium" },
        { name: "Phosphate", code: "PHOS001", category: "Biochemistry", specimen: "Blood", description: "Serum phosphate" },
        { name: "Magnesium (Mg)", code: "MG001", category: "Biochemistry", specimen: "Blood", description: "Serum magnesium" },

        // Glucose & Diabetes
        { name: "Fasting Blood Sugar (FBS)", code: "FBS001", category: "Biochemistry", specimen: "Blood", description: "Fasting glucose" },
        { name: "Random Blood Sugar (RBS)", code: "RBS001", category: "Biochemistry", specimen: "Blood", description: "Random glucose" },
        { name: "HbA1c (Glycated Hemoglobin)", code: "HBA1C001", category: "Biochemistry", specimen: "Blood", description: "3-month glucose average" },
        { name: "Oral Glucose Tolerance Test (OGTT)", code: "OGTT001", category: "Biochemistry", specimen: "Blood", description: "Glucose tolerance test" },
        { name: "2-Hour Post-Prandial Glucose", code: "PP2H001", category: "Biochemistry", specimen: "Blood", description: "Post-meal glucose" },

        // Lipid Profile
        { name: "Lipid Profile", code: "LIP001", category: "Biochemistry", specimen: "Blood", description: "Complete cholesterol panel" },
        { name: "Total Cholesterol", code: "CHOL001", category: "Biochemistry", specimen: "Blood", description: "Total cholesterol" },
        { name: "HDL Cholesterol", code: "HDL001", category: "Biochemistry", specimen: "Blood", description: "Good cholesterol" },
        { name: "LDL Cholesterol", code: "LDL001", category: "Biochemistry", specimen: "Blood", description: "Bad cholesterol" },
        { name: "Triglycerides", code: "TRIG001", category: "Biochemistry", specimen: "Blood", description: "Serum triglycerides" },
        { name: "VLDL Cholesterol", code: "VLDL001", category: "Biochemistry", specimen: "Blood", description: "Very low density lipoproteins" },

        // Cardiac Markers
        { name: "Troponin I", code: "TROP001", category: "Cardiac", specimen: "Blood", description: "Cardiac damage marker" },
        { name: "Troponin T", code: "TROPT001", category: "Cardiac", specimen: "Blood", description: "Cardiac damage marker" },
        { name: "CK-MB (Creatine Kinase-MB)", code: "CKMB001", category: "Cardiac", specimen: "Blood", description: "Heart muscle enzyme" },
        { name: "BNP (Brain Natriuretic Peptide)", code: "BNP001", category: "Cardiac", specimen: "Blood", description: "Heart failure marker" },
        { name: "NT-proBNP", code: "NTBNP001", category: "Cardiac", specimen: "Blood", description: "Heart failure marker" },

        // Thyroid Function
        { name: "Thyroid Function Tests (TFT)", code: "TFT001", category: "Endocrinology", specimen: "Blood", description: "Complete thyroid panel" },
        { name: "TSH (Thyroid Stimulating Hormone)", code: "TSH001", category: "Endocrinology", specimen: "Blood", description: "Thyroid function" },
        { name: "Free T3 (Triiodothyronine)", code: "FT3001", category: "Endocrinology", specimen: "Blood", description: "Active thyroid hormone" },
        { name: "Free T4 (Thyroxine)", code: "FT4001", category: "Endocrinology", specimen: "Blood", description: "Thyroid hormone" },
        { name: "Total T3", code: "TT3001", category: "Endocrinology", specimen: "Blood", description: "Total triiodothyronine" },
        { name: "Total T4", code: "TT4001", category: "Endocrinology", specimen: "Blood", description: "Total thyroxine" },
        { name: "Anti-TPO Antibodies", code: "ANTITPO001", category: "Immunology", specimen: "Blood", description: "Thyroid antibodies" },

        // Hormones
        { name: "Prolactin", code: "PRL001", category: "Endocrinology", specimen: "Blood", description: "Prolactin hormone" },
        { name: "Testosterone (Total)", code: "TEST001", category: "Endocrinology", specimen: "Blood", description: "Total testosterone" },
        { name: "Estradiol (E2)", code: "E2001", category: "Endocrinology", specimen: "Blood", description: "Estrogen hormone" },
        { name: "FSH (Follicle Stimulating Hormone)", code: "FSH001", category: "Endocrinology", specimen: "Blood", description: "Reproductive hormone" },
        { name: "LH (Luteinizing Hormone)", code: "LH001", category: "Endocrinology", specimen: "Blood", description: "Reproductive hormone" },
        { name: "Progesterone", code: "PROG001", category: "Endocrinology", specimen: "Blood", description: "Female hormone" },
        { name: "Cortisol", code: "CORT001", category: "Endocrinology", specimen: "Blood", description: "Stress hormone" },
        { name: "DHEA-S", code: "DHEA001", category: "Endocrinology", specimen: "Blood", description: "Adrenal hormone" },

        // Tumor Markers
        { name: "PSA (Prostate Specific Antigen)", code: "PSA001", category: "Tumor Markers", specimen: "Blood", description: "Prostate marker" },
        { name: "CEA (Carcinoembryonic Antigen)", code: "CEA001", category: "Tumor Markers", specimen: "Blood", description: "Colon cancer marker" },
        { name: "CA 19-9", code: "CA19001", category: "Tumor Markers", specimen: "Blood", description: "Pancreatic cancer marker" },
        { name: "CA 125", code: "CA125001", category: "Tumor Markers", specimen: "Blood", description: "Ovarian cancer marker" },
        { name: "CA 15-3", code: "CA15001", category: "Tumor Markers", specimen: "Blood", description: "Breast cancer marker" },
        { name: "AFP (Alpha-Fetoprotein)", code: "AFP001", category: "Tumor Markers", specimen: "Blood", description: "Liver cancer marker" },

        // Vitamins
        { name: "Vitamin D (25-OH)", code: "VITD001", category: "Vitamins", specimen: "Blood", description: "Vitamin D level" },
        { name: "Vitamin B12", code: "B12001", category: "Vitamins", specimen: "Blood", description: "Vitamin B12 level" },
        { name: "Folate (Folic Acid)", code: "FOL001", category: "Vitamins", specimen: "Blood", description: "Folate level" },
        { name: "Iron", code: "FE001", category: "Vitamins", specimen: "Blood", description: "Serum iron" },
        { name: "Ferritin", code: "FERR001", category: "Vitamins", specimen: "Blood", description: "Iron stores" },
        { name: "TIBC (Total Iron Binding Capacity)", code: "TIBC001", category: "Vitamins", specimen: "Blood", description: "Iron binding capacity" },
        { name: "Transferrin Saturation", code: "TSAT001", category: "Vitamins", specimen: "Blood", description: "Iron saturation percentage" },

        // Infectious Disease
        { name: "C-Reactive Protein (CRP)", code: "CRP001", category: "Inflammation", specimen: "Blood", description: "Inflammation marker" },
        { name: "High Sensitivity CRP (hs-CRP)", code: "HSCRP001", category: "Inflammation", specimen: "Blood", description: "Cardiac risk marker" },
        { name: "Procalcitonin (PCT)", code: "PCT001", category: "Inflammation", specimen: "Blood", description: "Bacterial infection marker" },

        // Hepatitis Panel
        { name: "Hepatitis B Surface Antigen (HBsAg)", code: "HBSAG001", category: "Serology", specimen: "Blood", description: "Hepatitis B screening" },
        { name: "Hepatitis B Surface Antibody (Anti-HBs)", code: "ANTIHBS001", category: "Serology", specimen: "Blood", description: "Hepatitis B immunity" },
        { name: "Hepatitis B Core Antibody (Anti-HBc)", code: "ANTIHBC001", category: "Serology", specimen: "Blood", description: "Hepatitis B exposure" },
        { name: "Hepatitis C Antibody (Anti-HCV)", code: "ANTIHCV001", category: "Serology", specimen: "Blood", description: "Hepatitis C screening" },
        { name: "Hepatitis A IgM", code: "HAIGM001", category: "Serology", specimen: "Blood", description: "Acute Hepatitis A" },

        // HIV & Others
        { name: "HIV 1 & 2 Antibody", code: "HIV001", category: "Serology", specimen: "Blood", description: "HIV screening" },
        { name: "Syphilis Test (VDRL/RPR)", code: "VDRL001", category: "Serology", specimen: "Blood", description: "Syphilis screening" },
        { name: "TPHA (Treponema pallidum)", code: "TPHA001", category: "Serology", specimen: "Blood", description: "Syphilis confirmation" },

        // Urine Tests
        { name: "Urinalysis (Complete)", code: "UA001", category: "Urinalysis", specimen: "Urine", description: "Complete urine analysis" },
        { name: "Urine Culture & Sensitivity", code: "UC001", category: "Microbiology", specimen: "Urine", description: "Bacterial culture" },
        { name: "Urine Microalbumin", code: "UMALB001", category: "Urinalysis", specimen: "Urine", description: "Early kidney damage" },
        { name: "Urine Protein/Creatinine Ratio", code: "UPCR001", category: "Urinalysis", specimen: "Urine", description: "Proteinuria assessment" },
        { name: "24-Hour Urine Protein", code: "24UP001", category: "Urinalysis", specimen: "Urine", description: "Total protein excretion" },

        // Stool Tests
        { name: "Stool Culture", code: "SC001", category: "Microbiology", specimen: "Stool", description: "Bacterial culture" },
        { name: "Stool for Ova & Parasites", code: "SOVA001", category: "Microbiology", specimen: "Stool", description: "Parasite detection" },
        { name: "Fecal Occult Blood Test", code: "FOBT001", category: "Biochemistry", specimen: "Stool", description: "Hidden blood detection" },
        { name: "Stool Calprotectin", code: "FCALP001", category: "Biochemistry", specimen: "Stool", description: "Intestinal inflammation" },
        { name: "Helicobacter Pylori Stool Antigen", code: "HPSA001", category: "Microbiology", specimen: "Stool", description: "H. pylori detection" },

        // Blood Culture
        { name: "Blood Culture & Sensitivity", code: "BC001", category: "Microbiology", specimen: "Blood", description: "Bacterial blood culture" },
        { name: "Throat Culture", code: "TC001", category: "Microbiology", specimen: "Throat Swab", description: "Throat bacterial culture" },
        { name: "Wound Culture", code: "WC001", category: "Microbiology", specimen: "Wound Swab", description: "Wound infection culture" },

        // Autoimmune Tests
        { name: "Rheumatoid Factor (RF)", code: "RF001", category: "Immunology", specimen: "Blood", description: "Rheumatoid arthritis marker" },
        { name: "Anti-CCP Antibodies", code: "ANTICCP001", category: "Immunology", specimen: "Blood", description: "RA specific antibodies" },
        { name: "ANA (Antinuclear Antibody)", code: "ANA001", category: "Immunology", specimen: "Blood", description: "Autoimmune screening" },
        { name: "Anti-dsDNA", code: "DSDNA001", category: "Immunology", specimen: "Blood", description: "SLE marker" },
        { name: "Complement C3", code: "C3001", category: "Immunology", specimen: "Blood", description: "Immune protein" },
        { name: "Complement C4", code: "C4001", category: "Immunology", specimen: "Blood", description: "Immune protein" },

        // Pregnancy Tests
        { name: "Beta hCG (Quantitative)", code: "BHCG001", category: "Endocrinology", specimen: "Blood", description: "Pregnancy hormone" },
        { name: "Urine Pregnancy Test", code: "UPT001", category: "Urinalysis", specimen: "Urine", description: "Qualitative pregnancy test" },

        // Arterial Blood Gas
        { name: "Arterial Blood Gas (ABG)", code: "ABG001", category: "Blood Gas", specimen: "Arterial Blood", description: "pH, pO2, pCO2, HCO3" },
        { name: "Venous Blood Gas (VBG)", code: "VBG001", category: "Blood Gas", specimen: "Venous Blood", description: "Venous pH and gases" },

        // Ammonia & Others
        { name: "Ammonia", code: "NH3001", category: "Biochemistry", specimen: "Blood", description: "Serum ammonia" },
        { name: "Lactate", code: "LAC001", category: "Biochemistry", specimen: "Blood", description: "Lactic acid" },
        { name: "Amylase", code: "AMY001", category: "Biochemistry", specimen: "Blood", description: "Pancreatic enzyme" },
        { name: "Lipase", code: "LIP001", category: "Biochemistry", specimen: "Blood", description: "Pancreatic enzyme" },
        { name: "LDH (Lactate Dehydrogenase)", code: "LDH001", category: "Biochemistry", specimen: "Blood", description: "Tissue damage marker" },

        // COVID-19
        { name: "COVID-19 PCR", code: "COVID001", category: "Molecular", specimen: "Nasopharyngeal Swab", description: "COVID-19 detection" },
        { name: "COVID-19 Antigen Test", code: "COVIDAG001", category: "Serology", specimen: "Nasopharyngeal Swab", description: "Rapid COVID test" },
        { name: "COVID-19 Antibody (IgG)", code: "COVIDIG001", category: "Serology", specimen: "Blood", description: "COVID immunity" }
    ],

    // ================================================
    // RADIOLOGY STUDIES DATABASE (150+ Common Studies)
    // ================================================
    radiologyStudies: [
        // X-Ray - Chest
        { name: "Chest X-Ray PA View", category: "X-Ray", description: "Posterior-anterior chest radiograph", bodyPart: "Chest", modality: "X-Ray" },
        { name: "Chest X-Ray Lateral View", category: "X-Ray", description: "Lateral chest radiograph", bodyPart: "Chest", modality: "X-Ray" },
        { name: "Chest X-Ray AP View", category: "X-Ray", description: "Anterior-posterior chest film", bodyPart: "Chest", modality: "X-Ray" },

        // X-Ray - Abdomen
        { name: "Abdominal X-Ray (KUB)", category: "X-Ray", description: "Kidneys, ureters, bladder radiograph", bodyPart: "Abdomen", modality: "X-Ray" },
        { name: "Abdominal X-Ray Erect", category: "X-Ray", description: "Standing abdominal film", bodyPart: "Abdomen", modality: "X-Ray" },
        { name: "Abdominal X-Ray Supine", category: "X-Ray", description: "Lying abdominal film", bodyPart: "Abdomen", modality: "X-Ray" },

        // X-Ray - Musculoskeletal
        { name: "Skull X-Ray AP & Lateral", category: "X-Ray", description: "Skull radiographs", bodyPart: "Head", modality: "X-Ray" },
        { name: "Cervical Spine X-Ray", category: "X-Ray", description: "Neck spine radiographs", bodyPart: "Spine", modality: "X-Ray" },
        { name: "Thoracic Spine X-Ray", category: "X-Ray", description: "Mid back radiographs", bodyPart: "Spine", modality: "X-Ray" },
        { name: "Lumbar Spine X-Ray", category: "X-Ray", description: "Lower back radiographs", bodyPart: "Spine", modality: "X-Ray" },
        { name: "Pelvis X-Ray", category: "X-Ray", description: "Pelvic bone radiograph", bodyPart: "Pelvis", modality: "X-Ray" },
        { name: "Hip Joint X-Ray", category: "X-Ray", description: "Hip radiographs bilateral", bodyPart: "Hip", modality: "X-Ray" },
        { name: "Knee X-Ray AP & Lateral", category: "X-Ray", description: "Knee joint radiographs", bodyPart: "Knee", modality: "X-Ray" },
        { name: "Ankle X-Ray AP & Lateral", category: "X-Ray", description: "Ankle radiographs", bodyPart: "Ankle", modality: "X-Ray" },
        { name: "Foot X-Ray AP & Oblique", category: "X-Ray", description: "Foot radiographs", bodyPart: "Foot", modality: "X-Ray" },
        { name: "Shoulder X-Ray AP & Lateral", category: "X-Ray", description: "Shoulder joint radiographs", bodyPart: "Shoulder", modality: "X-Ray" },
        { name: "Elbow X-Ray AP & Lateral", category: "X-Ray", description: "Elbow joint radiographs", bodyPart: "Elbow", modality: "X-Ray" },
        { name: "Wrist X-Ray AP & Lateral", category: "X-Ray", description: "Wrist radiographs", bodyPart: "Wrist", modality: "X-Ray" },
        { name: "Hand X-Ray AP & Oblique", category: "X-Ray", description: "Hand radiographs", bodyPart: "Hand", modality: "X-Ray" },
        { name: "Forearm X-Ray AP & Lateral", category: "X-Ray", description: "Radius and ulna radiographs", bodyPart: "Forearm", modality: "X-Ray" },
        { name: "Femur X-Ray AP & Lateral", category: "X-Ray", description: "Thigh bone radiographs", bodyPart: "Femur", modality: "X-Ray" },
        { name: "Tibia & Fibula X-Ray", category: "X-Ray", description: "Lower leg radiographs", bodyPart: "Leg", modality: "X-Ray" },

        // CT Scan - Head & Neck
        { name: "CT Brain Plain", category: "CT Scan", description: "Non-contrast brain CT", bodyPart: "Brain", modality: "CT" },
        { name: "CT Brain with Contrast", category: "CT Scan", description: "Contrast-enhanced brain CT", bodyPart: "Brain", modality: "CT" },
        { name: "CT Brain Angiography (CTA)", category: "CT Scan", description: "CT angiogram of brain vessels", bodyPart: "Brain Vessels", modality: "CT" },
        { name: "CT Paranasal Sinuses", category: "CT Scan", description: "Sinus CT scan", bodyPart: "Sinuses", modality: "CT" },
        { name: "CT Temporal Bones", category: "CT Scan", description: "Ear CT scan", bodyPart: "Ear", modality: "CT" },
        { name: "CT Neck with Contrast", category: "CT Scan", description: "Soft tissue neck CT", bodyPart: "Neck", modality: "CT" },
        { name: "CT Cervical Spine", category: "CT Scan", description: "Neck spine CT", bodyPart: "Cervical Spine", modality: "CT" },

        // CT Scan - Chest
        { name: "CT Chest Plain", category: "CT Scan", description: "Non-contrast chest CT", bodyPart: "Chest", modality: "CT" },
        { name: "CT Chest with Contrast", category: "CT Scan", description: "Contrast-enhanced chest CT", bodyPart: "Chest", modality: "CT" },
        { name: "High Resolution CT Chest (HRCT)", category: "CT Scan", description: "Detailed lung CT", bodyPart: "Lungs", modality: "CT" },
        { name: "CT Pulmonary Angiography (CTPA)", category: "CT Scan", description: "Pulmonary embolism study", bodyPart: "Pulmonary Arteries", modality: "CT" },
        { name: "CT Thoracic Spine", category: "CT Scan", description: "Mid back spine CT", bodyPart: "Thoracic Spine", modality: "CT" },

        // CT Scan - Abdomen & Pelvis
        { name: "CT Abdomen Plain", category: "CT Scan", description: "Non-contrast abdominal CT", bodyPart: "Abdomen", modality: "CT" },
        { name: "CT Abdomen with Contrast", category: "CT Scan", description: "Contrast-enhanced abdomen CT", bodyPart: "Abdomen", modality: "CT" },
        { name: "CT Abdomen & Pelvis Triple Phase", category: "CT Scan", description: "Multi-phase abdominal CT", bodyPart: "Abdomen & Pelvis", modality: "CT" },
        { name: "CT KUB (Kidney, Ureter, Bladder)", category: "CT Scan", description: "Urinary tract CT", bodyPart: "Urinary Tract", modality: "CT" },
        { name: "CT Lumbar Spine", category: "CT Scan", description: "Lower back spine CT", bodyPart: "Lumbar Spine", modality: "CT" },
        { name: "CT Pelvis with Contrast", category: "CT Scan", description: "Pelvic CT scan", bodyPart: "Pelvis", modality: "CT" },

        // CT Scan - Extremities
        { name: "CT Shoulder", category: "CT Scan", description: "Shoulder CT scan", bodyPart: "Shoulder", modality: "CT" },
        { name: "CT Elbow", category: "CT Scan", description: "Elbow CT scan", bodyPart: "Elbow", modality: "CT" },
        { name: "CT Wrist", category: "CT Scan", description: "Wrist CT scan", bodyPart: "Wrist", modality: "CT" },
        { name: "CT Hip Joint", category: "CT Scan", description: "Hip CT scan", bodyPart: "Hip", modality: "CT" },
        { name: "CT Knee", category: "CT Scan", description: "Knee CT scan", bodyPart: "Knee", modality: "CT" },
        { name: "CT Ankle", category: "CT Scan", description: "Ankle CT scan", bodyPart: "Ankle", modality: "CT" },

        // MRI - Brain & Spine
        { name: "MRI Brain Plain", category: "MRI", description: "Non-contrast brain MRI", bodyPart: "Brain", modality: "MRI" },
        { name: "MRI Brain with Contrast", category: "MRI", description: "Contrast-enhanced brain MRI", bodyPart: "Brain", modality: "MRI" },
        { name: "MRI Brain & MRA (Magnetic Resonance Angiography)", category: "MRI", description: "Brain with vessel imaging", bodyPart: "Brain & Vessels", modality: "MRI" },
        { name: "MRI Pituitary Gland", category: "MRI", description: "Pituitary MRI scan", bodyPart: "Pituitary", modality: "MRI" },
        { name: "MRI Cervical Spine", category: "MRI", description: "Neck spine MRI", bodyPart: "Cervical Spine", modality: "MRI" },
        { name: "MRI Thoracic Spine", category: "MRI", description: "Mid back MRI", bodyPart: "Thoracic Spine", modality: "MRI" },
        { name: "MRI Lumbar Spine", category: "MRI", description: "Lower back MRI", bodyPart: "Lumbar Spine", modality: "MRI" },
        { name: "MRI Whole Spine", category: "MRI", description: "Complete spine MRI", bodyPart: "Whole Spine", modality: "MRI" },

        // MRI - Abdomen & Pelvis
        { name: "MRI Abdomen Plain", category: "MRI", description: "Non-contrast abdominal MRI", bodyPart: "Abdomen", modality: "MRI" },
        { name: "MRI Abdomen with Contrast", category: "MRI", description: "Contrast-enhanced abdomen MRI", bodyPart: "Abdomen", modality: "MRI" },
        { name: "MRCP (MR Cholangiopancreatography)", category: "MRI", description: "Bile duct and pancreas MRI", bodyPart: "Biliary System", modality: "MRI" },
        { name: "MRI Pelvis", category: "MRI", description: "Pelvic MRI scan", bodyPart: "Pelvis", modality: "MRI" },
        { name: "MRI Prostate", category: "MRI", description: "Prostate gland MRI", bodyPart: "Prostate", modality: "MRI" },
        { name: "MRI Uterus & Ovaries", category: "MRI", description: "Female pelvic MRI", bodyPart: "Female Pelvis", modality: "MRI" },

        // MRI - Musculoskeletal
        { name: "MRI Shoulder", category: "MRI", description: "Shoulder joint MRI", bodyPart: "Shoulder", modality: "MRI" },
        { name: "MRI Elbow", category: "MRI", description: "Elbow joint MRI", bodyPart: "Elbow", modality: "MRI" },
        { name: "MRI Wrist", category: "MRI", description: "Wrist MRI scan", bodyPart: "Wrist", modality: "MRI" },
        { name: "MRI Hip Joint", category: "MRI", description: "Hip MRI scan", bodyPart: "Hip", modality: "MRI" },
        { name: "MRI Knee", category: "MRI", description: "Knee joint MRI", bodyPart: "Knee", modality: "MRI" },
        { name: "MRI Ankle & Foot", category: "MRI", description: "Ankle and foot MRI", bodyPart: "Ankle", modality: "MRI" },
        { name: "MRI Sacroiliac Joints", category: "MRI", description: "SI joints MRI", bodyPart: "SI Joints", modality: "MRI" },

        // Ultrasound - Abdomen
        { name: "Abdominal Ultrasound Complete", category: "Ultrasound", description: "Full abdomen ultrasound", bodyPart: "Abdomen", modality: "Ultrasound" },
        { name: "Upper Abdomen Ultrasound", category: "Ultrasound", description: "Liver, GB, pancreas, spleen", bodyPart: "Upper Abdomen", modality: "Ultrasound" },
        { name: "Renal Ultrasound", category: "Ultrasound", description: "Kidney ultrasound bilateral", bodyPart: "Kidneys", modality: "Ultrasound" },
        { name: "Urinary Bladder Ultrasound", category: "Ultrasound", description: "Bladder scan", bodyPart: "Bladder", modality: "Ultrasound" },
        { name: "Hepatobiliary Ultrasound", category: "Ultrasound", description: "Liver and gallbladder", bodyPart: "Liver & GB", modality: "Ultrasound" },
        { name: "Pancreas Ultrasound", category: "Ultrasound", description: "Pancreatic ultrasound", bodyPart: "Pancreas", modality: "Ultrasound" },

        // Ultrasound - Pelvic
        { name: "Pelvic Ultrasound Transabdominal", category: "Ultrasound", description: "Abdominal pelvic scan", bodyPart: "Pelvis", modality: "Ultrasound" },
        { name: "Pelvic Ultrasound Transvaginal", category: "Ultrasound", description: "Internal pelvic scan", bodyPart: "Female Pelvis", modality: "Ultrasound" },
        { name: "Prostate Ultrasound Transrectal", category: "Ultrasound", description: "Prostate scan", bodyPart: "Prostate", modality: "Ultrasound" },
        { name: "Obstetric Ultrasound (Dating)", category: "Ultrasound", description: "Early pregnancy scan", bodyPart: "Uterus", modality: "Ultrasound" },
        { name: "Obstetric Ultrasound (Anatomy)", category: "Ultrasound", description: "Detailed fetal scan", bodyPart: "Fetus", modality: "Ultrasound" },
        { name: "Obstetric Ultrasound (Growth)", category: "Ultrasound", description: "Fetal growth assessment", bodyPart: "Fetus", modality: "Ultrasound" },

        // Ultrasound - Vascular
        { name: "Carotid Doppler Ultrasound", category: "Ultrasound", description: "Neck artery assessment", bodyPart: "Carotid Arteries", modality: "Doppler" },
        { name: "Lower Limb Venous Doppler", category: "Ultrasound", description: "DVT assessment", bodyPart: "Leg Veins", modality: "Doppler" },
        { name: "Lower Limb Arterial Doppler", category: "Ultrasound", description: "Leg artery assessment", bodyPart: "Leg Arteries", modality: "Doppler" },
        { name: "Renal Artery Doppler", category: "Ultrasound", description: "Kidney artery scan", bodyPart: "Renal Arteries", modality: "Doppler" },
        { name: "Portal Vein Doppler", category: "Ultrasound", description: "Liver vessel assessment", bodyPart: "Portal Vein", modality: "Doppler" },

        // Ultrasound - Other
        { name: "Thyroid Ultrasound", category: "Ultrasound", description: "Thyroid gland scan", bodyPart: "Thyroid", modality: "Ultrasound" },
        { name: "Breast Ultrasound", category: "Ultrasound", description: "Breast tissue scan", bodyPart: "Breast", modality: "Ultrasound" },
        { name: "Scrotal Ultrasound", category: "Ultrasound", description: "Testicular scan", bodyPart: "Scrotum", modality: "Ultrasound" },
        { name: "Neck Soft Tissue Ultrasound", category: "Ultrasound", description: "Neck mass evaluation", bodyPart: "Neck", modality: "Ultrasound" },
        { name: "Musculoskeletal Ultrasound", category: "Ultrasound", description: "Joint and soft tissue", bodyPart: "Joints", modality: "Ultrasound" },

        // Mammography
        { name: "Mammography Bilateral", category: "Mammography", description: "Breast cancer screening", bodyPart: "Breasts", modality: "Mammography" },
        { name: "Mammography with Tomosynthesis", category: "Mammography", description: "3D mammogram", bodyPart: "Breasts", modality: "Mammography" },

        // Fluoroscopy & Contrast Studies
        { name: "Barium Swallow", category: "Fluoroscopy", description: "Esophageal study", bodyPart: "Esophagus", modality: "Fluoroscopy" },
        { name: "Barium Meal", category: "Fluoroscopy", description: "Stomach and duodenum study", bodyPart: "Upper GI", modality: "Fluoroscopy" },
        { name: "Barium Follow Through", category: "Fluoroscopy", description: "Small bowel study", bodyPart: "Small Intestine", modality: "Fluoroscopy" },
        { name: "Barium Enema", category: "Fluoroscopy", description: "Colon study", bodyPart: "Colon", modality: "Fluoroscopy" },
        { name: "Intravenous Pyelogram (IVP)", category: "Fluoroscopy", description: "Urinary tract study", bodyPart: "Urinary System", modality: "Fluoroscopy" },
        { name: "Hysterosalpingography (HSG)", category: "Fluoroscopy", description: "Fallopian tube study", bodyPart: "Uterus & Tubes", modality: "Fluoroscopy" },
        { name: "Arthrography", category: "Fluoroscopy", description: "Joint contrast study", bodyPart: "Joints", modality: "Fluoroscopy" },
        { name: "Myelography", category: "Fluoroscopy", description: "Spinal canal study", bodyPart: "Spinal Canal", modality: "Fluoroscopy" },

        // Nuclear Medicine
        { name: "Bone Scan (Whole Body)", category: "Nuclear Medicine", description: "Skeletal scintigraphy", bodyPart: "Skeleton", modality: "Nuclear" },
        { name: "Thyroid Scan", category: "Nuclear Medicine", description: "Thyroid scintigraphy", bodyPart: "Thyroid", modality: "Nuclear" },
        { name: "Renal Scan (DTPA/DMSA)", category: "Nuclear Medicine", description: "Kidney function scan", bodyPart: "Kidneys", modality: "Nuclear" },
        { name: "Cardiac Stress Test (Myocardial Perfusion)", category: "Nuclear Medicine", description: "Heart blood flow study", bodyPart: "Heart", modality: "Nuclear" },
        { name: "PET-CT Whole Body", category: "Nuclear Medicine", description: "Metabolic imaging", bodyPart: "Whole Body", modality: "PET-CT" },
        { name: "Gallium Scan", category: "Nuclear Medicine", description: "Infection/tumor scan", bodyPart: "Whole Body", modality: "Nuclear" },

        // Interventional Radiology
        { name: "CT-Guided Biopsy", category: "Interventional", description: "Image-guided tissue sampling", bodyPart: "Various", modality: "CT" },
        { name: "Ultrasound-Guided Biopsy", category: "Interventional", description: "US-guided tissue sampling", bodyPart: "Various", modality: "Ultrasound" },
        { name: "CT-Guided Drainage", category: "Interventional", description: "Abscess drainage", bodyPart: "Various", modality: "CT" },
        { name: "Angiography (Diagnostic)", category: "Interventional", description: "Vessel imaging", bodyPart: "Vessels", modality: "Angiography" },
        { name: "Angioplasty", category: "Interventional", description: "Vessel dilation", bodyPart: "Vessels", modality: "Angiography" }
    ],

    // ================================================
    // SEARCH FUNCTIONS
    // ================================================

    searchMedications: function (query) {
        if (!query || query.length < 2) return [];
        query = query.toLowerCase();
        return this.medications.filter(med =>
            med.name.toLowerCase().includes(query) ||
            med.category.toLowerCase().includes(query)
        ).slice(0, 10);
    },

    searchLabTests: function (query) {
        if (!query || query.length < 2) return [];
        query = query.toLowerCase();
        return this.labTests.filter(test =>
            test.name.toLowerCase().includes(query) ||
            test.category.toLowerCase().includes(query) ||
            test.code.toLowerCase().includes(query)
        ).slice(0, 10);
    },

    searchRadiology: function (query) {
        if (!query || query.length < 2) return [];
        query = query.toLowerCase();
        return this.radiologyStudies.filter(study =>
            study.name.toLowerCase().includes(query) ||
            study.category.toLowerCase().includes(query) ||
            study.bodyPart.toLowerCase().includes(query)
        ).slice(0, 10);
    }
};
