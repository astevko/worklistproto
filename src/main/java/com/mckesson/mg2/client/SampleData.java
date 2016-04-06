/**
 * 
 */
package com.mckesson.mg2.client;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;

/**
 * Worklist sample data
 * @author efdj6eb
 *
 */
public class SampleData {
    public static class Patient extends JavaScriptObject {
        protected Patient() {
            
        };
        public final native int id() /*-{
            return this.id;
        }-*/;                
    }
    public static class LabWorklist extends JavaScriptObject {
        protected LabWorklist() {
            
        };
        public final native int id() /*-{
            return this.id;
        }-*/;                
    }
    public static native JsArray<LabWorklist> getLabWorklists() /*-{
        return
        [{
        "id" : 1,
        "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
        "uniqueId" : "PatientResultHeader1723997",
        "patEntityId" : 1723997,
        "patEntityType" : "PatientResultHeader",
        "patId" : 530702,
        "patName" : "release2/8, Test ",
        "patGenderAgeDobMrn" : "F/38 - 12/07/1977 - 767888",
        "patPhone" : null,
        "dateOfService" : "1423422000000",
        "dateOfEntry" : "1423388577707",
        "reviewStatus" : "PENDING",
        "resultName" : "DOG DANDER (E5) IGE",
        "resultFlag" : "HIGH",
        "reviewCategory" : "Lab",
        "transferred" : false,
        "patientDisplayString" : "release2/8, Test  (F/38 - 12/07/1977 - 767888)",
        "beanErrors" : null
    }, {
        "id" : 2,
        "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
        "uniqueId" : "PatientResultHeader2034336",
        "patEntityId" : 2034336,
        "patEntityType" : "PatientResultHeader",
        "patId" : 625179,
        "patName" : "Patch3/22, Test ",
        "patGenderAgeDobMrn" : "F/36 - 12/01/1979 - 65656",
        "patPhone" : null,
        "dateOfService" : "1427010203000",
        "dateOfEntry" : "1427010220214",
        "reviewStatus" : "PENDING",
        "resultName" : "Panel3/22",
        "resultFlag" : "NORMAL",
        "reviewCategory" : "Lab",
        "transferred" : false,
        "patientDisplayString" : "Patch3/22, Test  (F/36 - 12/01/1979 - 65656)",
        "beanErrors" : null
    }, {
        "id" : 3,
        "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
        "uniqueId" : "PatientResultHeader2175385",
        "patEntityId" : 2175385,
        "patEntityType" : "PatientResultHeader",
        "patId" : 665862,
        "patName" : "ZZJones, TestMa1 ",
        "patGenderAgeDobMrn" : "F/50 - 10/19/1965 - zztestma1",
        "patPhone" : null,
        "dateOfService" : "1431445271000",
        "dateOfEntry" : "1431445324070",
        "reviewStatus" : "PENDING",
        "resultName" : "INR",
        "resultFlag" : "NONE",
        "reviewCategory" : "Lab",
        "transferred" : false,
        "patientDisplayString" : "ZZJones, TestMa1  (F/50 - 10/19/1965 - zztestma1)",
        "beanErrors" : null
    }, {
        "id" : 4,
        "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
        "uniqueId" : "PatientResultHeader2166546",
        "patEntityId" : 2166546,
        "patEntityType" : "PatientResultHeader",
        "patId" : 661664,
        "patName" : "pentium, pentium q.",
        "patGenderAgeDobMrn" : "F/103 - 12/12/1912 - pentium333",
        "patPhone" : null,
        "dateOfService" : "1431030311000",
        "dateOfEntry" : "1431030348618",
        "reviewStatus" : "PENDING",
        "resultName" : "CBC w/ Retic",
        "resultFlag" : "NONE",
        "reviewCategory" : "Lab",
        "transferred" : false,
        "patientDisplayString" : "pentium, pentium q. (F/103 - 12/12/1912 - pentium333)",
        "beanErrors" : null
    }, {
        "id" : 5,
        "avatar" : "images/defaultMalePatientPhoto-mobile.png",
        "uniqueId" : "PatientResultHeader2166465",
        "patEntityId" : 2166465,
        "patEntityType" : "PatientResultHeader",
        "patId" : 661630,
        "patName" : "wait, wait q.",
        "patGenderAgeDobMrn" : "M/103 - 12/12/1912 - TestingAgagin333",
        "patPhone" : null,
        "dateOfService" : "1431029485000",
        "dateOfEntry" : "1431029517016",
        "reviewStatus" : "PENDING",
        "resultName" : "CBC w/ Retic",
        "resultFlag" : "NONE",
        "reviewCategory" : "Lab",
        "transferred" : false,
        "patientDisplayString" : "wait, wait q. (M/103 - 12/12/1912 - TestingAgagin333)",
        "beanErrors" : null
    }, {
        "id" : 6,
        "avatar" : "images/defaultMalePatientPhoto-mobile.png",
        "uniqueId" : "PatientResultHeader2166401",
        "patEntityId" : 2166401,
        "patEntityType" : "PatientResultHeader",
        "patId" : 661630,
        "patName" : "wait, wait q.",
        "patGenderAgeDobMrn" : "M/103 - 12/12/1912 - TestingAgagin333",
        "patPhone" : null,
        "dateOfService" : "1431028823000",
        "dateOfEntry" : "1431028852479",
        "reviewStatus" : "PENDING",
        "resultName" : "CBC w/ Retic",
        "resultFlag" : "NONE",
        "reviewCategory" : "Lab",
        "transferred" : false,
        "patientDisplayString" : "wait, wait q. (M/103 - 12/12/1912 - TestingAgagin333)",
        "beanErrors" : null
    }
]
         
    }-*/;
    public static native JsArray<Patient> getPatients() /*-{
        return [
    {
            "id" : 67647,
            "middleName" : "D",
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "CAROLYN",
            "primaryId" : "323bee",
            "age" : 77,
            "lastName" : "OCHELTREE",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 1075137,
            "middleName" : null,
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "Test",
            "primaryId" : "1223",
            "age" : 28,
            "lastName" : "76.8",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 213723,
            "middleName" : "J",
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "Sally",
            "primaryId" : "E11562959",
            "age" : 76,
            "lastName" : "Aaronson",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 2662,
            "middleName" : null,
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "Green",
            "primaryId" : "190735",
            "age" : 39,
            "lastName" : "Asparagus",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 51022,
            "middleName" : null,
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "Training1",
            "primaryId" : "06121950",
            "age" : 65,
            "lastName" : " Niemann",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 679266,
            "middleName" : null,
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "Test",
            "primaryId" : "75patch2",
            "age" : 28,
            "lastName" : "75patch2",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 1381094,
            "middleName" : null,
            "gender" : "M",
            "avatar" : "images/defaultMalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "First001",
            "primaryId" : "MRN001",
            "age" : 46,
            "lastName" : "Last001",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 421003,
            "middleName" : null,
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "DIANA",
            "primaryId" : "326",
            "age" : 59,
            "lastName" : "PALACIO",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 243385,
            "middleName" : "patch",
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "Test",
            "primaryId" : "767676",
            "age" : 29,
            "lastName" : "697.5",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 247362,
            "middleName" : null,
            "gender" : "M",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "Demo",
            "primaryId" : "demotest2222",
            "age" : 66,
            "lastName" : "Test",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 661630,
            "middleName" : "qa",
            "gender" : "M",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "wait",
            "primaryId" : "TestingAgagin333",
            "age" : 103,
            "lastName" : "wait",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 661664,
            "middleName" : "qa",
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "pentium",
            "primaryId" : "pentium333",
            "age" : 103,
            "lastName" : "pentium",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 665862,
            "middleName" : null,
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "TestMa1",
            "primaryId" : "zztestma1",
            "age" : 50,
            "lastName" : "ZZJones",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 625179,
            "middleName" : null,
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "Test",
            "primaryId" : "65656",
            "age" : 36,
            "lastName" : "Patch3/22",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 673515,
            "middleName" : "release76",
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "Test",
            "primaryId" : "MCPTest",
            "age" : 36,
            "lastName" : "5/30",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 1379628,
            "middleName" : null,
            "gender" : "M",
            "avatar" : "images/defaultMalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "not",
            "primaryId" : "notyet123",
            "age" : 103,
            "lastName" : "yet",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 1367809,
            "middleName" : null,
            "gender" : "U",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "g2 ",
            "primaryId" : "7865",
            "age" : 40,
            "lastName" : "load",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 1381034,
            "middleName" : null,
            "gender" : "M",
            "avatar" : "images/defaultMalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "zzJack",
            "primaryId" : "123456",
            "age" : 67,
            "lastName" : "zzTest",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 1379648,
            "middleName" : null,
            "gender" : "M",
            "avatar" : "images/defaultMalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "No",
            "primaryId" : "notoyes",
            "age" : 103,
            "lastName" : "Yes",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 485143,
            "middleName" : null,
            "gender" : "M",
            "avatar" : "images/defaultMalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "AURELIO",
            "primaryId" : "1090",
            "age" : 74,
            "lastName" : "BANDERA",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 1366690,
            "middleName" : null,
            "gender" : "M",
            "avatar" : "images/defaultMalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "11/12",
            "primaryId" : "k98876",
            "age" : 55,
            "lastName" : "patch",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 64242,
            "middleName" : null,
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "228",
            "primaryId" : "zz34y64hs",
            "age" : 66,
            "lastName" : "zztest",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 115383,
            "middleName" : null,
            "gender" : "M",
            "avatar" : "images/defaultMalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "test",
            "primaryId" : "324324",
            "age" : 18,
            "lastName" : "526",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 898312,
            "middleName" : null,
            "gender" : "F",
            "avatar" : "images/defaultFemalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "kenneth",
            "primaryId" : "kmarx1-666",
            "age" : 49,
            "lastName" : "zzmarx",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }, {
        
            "id" : 9762,
            "middleName" : "tulsian",
            "gender" : "M",
            "avatar" : "images/defaultMalePatientPhoto-mobile.png",
            "dob" : "02/14/1926",
            "firstName" : "nithin",
            "primaryId" : "101196822",
            "age" : 35,
            "lastName" : "agarwal",
            "physician" : "Dr. Spock",
            "alias" : null,
            "suffix" : null
    }
]

    }-*/ ;
    
}
