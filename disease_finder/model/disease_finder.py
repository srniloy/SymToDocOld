import pandas as pd

class DiseaseFinder:
    

    def find(symptoms):
        symp_code = pd.read_csv("./model/symptom_weight_code.csv")
        symp_code = symp_code.drop('Unnamed: 0', axis='columns')
        train = pd.read_csv("./model/coded_dataset.csv")
        train = train.drop_duplicates(subset=['Disease'])
        # input = "abdominal_pain+high_fever+fatigue+dark_urine+itching"
        input_symptoms = symptoms.split("+")
        print(input_symptoms)
        


        symp_code_dict = {}
        for i in range(0, symp_code.shape[0]):
            symp_code_dict[symp_code['Symptom'][i].strip()] = symp_code['code'][i]

        input_symptoms_code = []
        i = 0
        for symps in input_symptoms:
            input_symptoms_code.append(symp_code_dict[symps])
            i += 1
        input_symptoms_code.sort()
        while i < 17:
            input_symptoms_code.append(0)
            i += 1
        X = train.drop("Disease",axis='columns').copy()
        Y = train["Disease"].copy()

        x = 5
        matchCount = {}
        sorted_df = pd.DataFrame([])
        for key, value in train.iterrows():
            row = list(value)[1:]
            matchCount[key] = 0
            for i in range(len(row)):
                if row[i] == 0 or input_symptoms_code[i] == 0:
                    break
                if input_symptoms_code[i] in row:
                    matchCount[key] += 1
        matchCount = dict(sorted(matchCount.items(), key=lambda item: item[1], reverse=True)[:5])
        result = []
        indexList = list(matchCount.keys())
        weightList = list(matchCount.values())
        for i in range(len(matchCount)):
            result.append(dict({'disease': Y[indexList[i]], 'weight': weightList[i]}))
        return result


