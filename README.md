# 🧠 Fairness Forecaster

### AI-Powered Income Prediction & Bias Detection

An interactive machine learning platform that predicts income using the Adult Census dataset while identifying demographic bias and providing explainable AI insights.

![Python](https://img.shields.io/badge/Python-3.8+-blue)
![Streamlit](https://img.shields.io/badge/Streamlit-Latest-red)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Overview

Fairness Forecaster is an end-to-end machine learning application focused on both predictive performance and responsible AI.

The platform predicts whether an individual's annual income exceeds $50,000 using the Adult Census Income Dataset while simultaneously evaluating model fairness across demographic groups.

Unlike traditional ML projects that focus solely on accuracy, Fairness Forecaster incorporates bias detection, explainability, and fairness auditing into the complete machine learning workflow.

### Core Objectives

* Build an accurate classification model
* Evaluate fairness across demographic groups
* Improve model transparency
* Demonstrate responsible AI practices
* Provide interactive data exploration

---

## ✨ Features

### 📊 Interactive Data Exploration

Explore feature distributions, demographic trends, and income patterns through interactive visualizations.

### 🤖 Machine Learning Model

Random Forest Classifier trained on the Adult Census Dataset with approximately 85% accuracy.

### 📈 Performance Evaluation

Comprehensive evaluation metrics including:

* Accuracy
* Precision
* Recall
* F1 Score
* Confusion Matrix
* Classification Report

### 🔍 Feature Importance Analysis

Identify the most influential features affecting model predictions.

### ⚖️ Fairness Audit

Analyze model behavior across race and gender groups using disparity metrics.

### 🔄 Counterfactual Explanations

Generate actionable "what-if" scenarios showing how predictions can change.

### 💻 Streamlit Dashboard

Interactive and user-friendly interface for model exploration and fairness analysis.

---

## 🏗️ Architecture

```text
User Input
     │
     ▼
Data Processing
     │
     ▼
Feature Engineering
     │
     ▼
Random Forest Model
     │
     ├── Prediction Engine
     ├── Fairness Analysis
     └── Explainability Module
     │
     ▼
Interactive Dashboard
```

---

## 🛠️ Technology Stack

| Category         | Technologies        |
| ---------------- | ------------------- |
| Language         | Python              |
| Data Processing  | Pandas, NumPy       |
| Machine Learning | Scikit-Learn        |
| Visualization    | Matplotlib, Seaborn |
| Web Application  | Streamlit           |
| Version Control  | Git, GitHub         |

---

## 📂 Project Structure

```text
fairness-forecaster/
│
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── adult.data.txt
├── adult.test.txt
└── adult.names.txt
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/krishnapopat130324-art/fairness-forecaster.git

cd fairness-forecaster
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate environment:

Windows:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## ▶️ Run the Application

```bash
streamlit run app.py
```

Open:

```text
http://localhost:8501
```

---

## 📊 Results

| Metric    | Performance |
| --------- | ----------- |
| Accuracy  | ~85%        |
| Precision | High        |
| Recall    | High        |
| F1 Score  | High        |

### Key Insights

* Strong predictive performance
* Detects demographic disparities
* Provides fairness measurements
* Improves model transparency
* Supports responsible AI development

---

## 🎯 Skills Demonstrated

* Machine Learning
* Data Science
* Data Cleaning
* Feature Engineering
* Model Evaluation
* Explainable AI
* Fairness Analysis
* Software Engineering
* Interactive Dashboard Development
* Data Visualization

---

##  Author

* Krishna Popat
* 
---

### Built with a commitment to Fair, Explainable, and Responsible AI.
