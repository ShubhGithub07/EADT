import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler

try:
    df = pd.read_csv("C:/Users/yadre/Downloads/Autism-Prediction-using-Machine-Learning---DataSet.csv")  
    print("Dataset loaded successfully.")
except FileNotFoundError:
    print("Error: The dataset file was not found. Please check the path.")
    exit()

print(df.head())
print(df.info())

df.ffill(inplace = True)

print("Columns in the DataFrame:", df.columns)

categorical_columns = ['ID', 'A1_Score', 'A2_Score', 'A3_Score', 'A4_Score', 'A5_Score',
       'A6_Score', 'A7_Score', 'A8_Score', 'A9_Score', 'A10_Score', 'age',
       'gender', 'ethnicity', 'jaundice', 'austim', 'contry_of_res',
       'used_app_before', 'result', 'age_desc', 'relation']
df = pd.get_dummies(df, columns=categorical_columns)

feature_columns = ['ID', 'A1_Score', 'A2_Score', 'A3_Score', 'A4_Score', 'A5_Score',
       'A6_Score', 'A7_Score', 'A8_Score', 'A9_Score', 'A10_Score', 'age',
       'gender', 'ethnicity', 'jaundice', 'austim', 'contry_of_res',
       'used_app_before', 'result', 'age_desc', 'relation']
scaler = StandardScaler()
df[feature_columns] = scaler.fit_transform(df[feature_columns])

df.to_csv("C:/Users/yadre/Downloads/Autism-Prediction-using-Machine-Learning---DataSet.csv", index = False)
print("Preprocessed data saved successfully.")