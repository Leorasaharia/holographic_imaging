# Radiation-Free Anatomical Inference via AI-Based Holographic Visualization

*A research-oriented proof-of-concept exploring radiation-free anatomical visualization using AI-based inference from external body geometry.*

⚠️ **This is NOT a diagnostic system.**
This project is intended strictly for **research visualization and educational exploration**.

---

## 🔬 Overview

Conventional medical imaging (CT, MRI, X-ray, PET) relies on radiation, high-cost infrastructure, or limited accessibility.
This project explores a **computational alternative**:

> **Can AI infer an approximate internal anatomical structure using only non-invasive external body measurements?**

The system learns a **latent anatomical representation** from external body geometry and visualizes the result as a **holographic, semi-transparent human model**.

---

## 🧠 Core Research Contribution (Primary Focus)

The heart of this work lies in the **model training and analysis pipeline**, implemented in:

📓 **`Radiation_Free_Anatomical_Inference.ipynb`**

This notebook performs:

* Data preprocessing & normalization
* Feature encoding from external body measurements
* Learning a **latent anatomical space** using neural networks
* **Unsupervised discovery of anatomical archetypes**
* Generative decoding for anatomical interpolation

### Techniques Used

* Autoencoders (representation learning)
* PCA for latent space visualization
* K-Means clustering for body archetype discovery
* Generative latent-space decoding

---

## 📊 Learned Latent Anatomy Space

### AI-Discovered Human Body Archetypes
![Latent Anatomy Space](latent_space.png)
<img width="618" height="547" alt="image" src="https://github.com/user-attachments/assets/5d2711b4-eeef-4388-a069-2e4779ef398d" />


### Continuous Latent Anatomical Manifold

![Human Body Structure Clusters](body_clusters.png)
<img width="625" height="547" alt="image" src="https://github.com/user-attachments/assets/b8b059f5-12d0-479e-b9c2-246bcc99a639" />


These figures are generated **directly from the training notebook**, demonstrating how the model organizes human anatomy into a structured, interpretable latent space.

---

## 🌐 Holographic Visualization (Secondary Layer)

To communicate the research intuitively, a **React + Vite web interface** was developed to visualize model outputs.

🔗 **Live Demo:**
👉 [https://holographic-imaging.vercel.app/](https://holographic-imaging.vercel.app/)

### Purpose

* Visualize AI-discovered body archetypes
* Explore latent anatomy interactively
* Present research outputs in a holographic form

**Frontend Stack**

* React + Vite
* Research-focused, non-commercial UI
* Semi-transparent, holographic visual style

---

## 📊 Dataset & Ethics

* Uses **only open, non-clinical datasets**
* No patient-specific medical records
* No disease detection or diagnosis
* Outputs are **AI-inferred approximations**, not real anatomy

See `dataset.md` for full details.

---

## 🧠 Research Motivation

This project sits at the intersection of:

* Biomedical Engineering
* Computational Imaging
* AI Representation Learning
* Radiation-free healthcare exploration

It demonstrates how **AI can support future non-invasive visualization methods** without making clinical claims.

---

## 🚀 Running the Project

**Backend (Research Notebook)**

```bash
pip install -r requirements.txt
# Open and run:
Radiation_Free_Anatomical_Inference.ipynb
```

**Frontend (Visualization)**

```bash
npm install
npm run dev
```

---

## 👩‍🔬 Author

**Leora Saharia**
Biomedical Engineering
National Institute of Technology Raipur

---
