/**
 * 
 */
package com.mckesson.mg2.client;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;

/**
 * Worklist sample data
 * 
 * @author efdj6eb
 */
public class SampleData {
    public static class Patient extends JavaScriptObject {
        protected Patient() {
        };
        public final native int id() /*-{
			return this.id;
        }-*/;
        public final native String avatar() /*-{
			return this.avatar;
        }-*/;
        public final native String name() /*-{
			return this.lastName + ', ' + this.firstName;
        }-*/;
        public final native String gender() /*-{
			return this.gender;
        }-*/;
        public final native String dob() /*-{
            if (this.dob)
                return this.dob;
            else 
                return "";
        }-*/;
        public final native String mrn() /*-{
            if (this.mrn)
			    return this.mrn;
			else
			    return "";
        }-*/;
        public final native int age() /*-{
			return this.age;
        }-*/;
    }

    public static class LabWorklist extends JavaScriptObject {
        protected LabWorklist() {
        };
        public final native int id() /*-{
			return this.id;
        }-*/;

        public final native String avatar() /*-{
			return this.avatar;
        }-*/;

        public final native String uniqueId() /*-{
			return this.uniqueId;
        }-*/;

        public final native String patEntityId() /*-{
			return this.patEntityId;
        }-*/;

        public final native String patEntityType() /*-{
			return this.patEntityType;
        }-*/;

        public final native String patId() /*-{
			return this.patId;
        }-*/;

        public final native String patName() /*-{
			return this.patName;
        }-*/;

        public final native String patGenderAgeDobMrn() /*-{
			return this.patGenderAgeDobMrn;
        }-*/;

        public final native String patPhone() /*-{
			return this.patPhone;
        }-*/;

        public final native String reviewStatus() /*-{
			return this.reviewStatus;
        }-*/;

        public final native String resultName() /*-{
			return this.resultName;
        }-*/;

        public final native String resultFlag() /*-{
			return this.resultFlag;
        }-*/;

        public final native String reviewCategory() /*-{
			return this.reviewCategory;
        }-*/;

        public final native String transferred() /*-{
			return this.transferred;
        }-*/;

        public final native String patientDisplayString() /*-{
			return this.patientDisplayString;
        }-*/;

        /**
         * 
         */
        public final native void toggleSelection() /*-{
			this.isSelected = !this.isSelected;
			if (this.isSelected) {
				this.selectionIcon = 'check-circle';
			} else {
				this.selectionIcon = 'add-circle';
			}
        }-*/;

        public final native void isSelected() /*-{
			return this.isSelected;
        }-*/;
    }

    public static native JsArray<LabWorklist> getLabWorklists() /*-{
		console.log('getLabWorklists()');
		return [
				{
					"id" : 1,
					"avatar" : "images/001.jpg",
					"uniqueId" : "PatientResultHeader1723997",
					"patEntityId" : 1723997,
					"patEntityType" : "PatientResultHeader",
					"patId" : 530702,
					"patName" : "Seymour, Jane ",
					"patGenderAgeDobMrn" : "F/38 - 12/07/1977 - 767888",
					"patPhone" : null,
					"dateOfService" : "1423422000000",
					"dateOfEntry" : "1423388577707",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC",
					"resultFlag" : "HIGH",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Seymour, Jane  (F/38 - 12/07/1977 - 767888)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 2,
					"avatar" : "images/002.jpg",
					"uniqueId" : "PatientResultHeader2034336",
					"patEntityId" : 2034336,
					"patEntityType" : "PatientResultHeader",
					"patId" : 625179,
					"patName" : "Lando, Joe ",
					"patGenderAgeDobMrn" : "F/36 - 12/01/1979 - 65656",
					"patPhone" : null,
					"dateOfService" : "1427010203000",
					"dateOfEntry" : "1427010220214",
					"reviewStatus" : "PENDING",
					"resultName" : "Panel3/22",
					"resultFlag" : "NORMAL",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Lando, Joe  (F/36 - 12/01/1979 - 65656)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 3,
					"avatar" : "images/003.jpg",
					"uniqueId" : "PatientResultHeader2175385",
					"patEntityId" : 2175385,
					"patEntityType" : "PatientResultHeader",
					"patId" : 665862,
					"patName" : "Allen, Chad ",
					"patGenderAgeDobMrn" : "F/50 - 10/19/1965 - 665862",
					"patPhone" : null,
					"dateOfService" : "1431445271000",
					"dateOfEntry" : "1431445324070",
					"reviewStatus" : "PENDING",
					"resultName" : "INR",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Allen, Chad  (F/50 - 10/19/1965 - 665862)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 4,
					"avatar" : "images/004.jpg",
					"uniqueId" : "PatientResultHeader2166546",
					"patEntityId" : 2166546,
					"patEntityType" : "PatientResultHeader",
					"patId" : 661664,
					"patName" : "Flores, Erika",
					"patGenderAgeDobMrn" : "F/103 - 12/12/1912 - 661664",
					"patPhone" : null,
					"dateOfService" : "1431030311000",
					"dateOfEntry" : "1431030348618",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC w/ Retic",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Flores, Erika (F/103 - 12/12/1912 - 661664)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 5,
					"avatar" : "images/defaultFemalePatientPhoto-mobile.png",
					"uniqueId" : "PatientResultHeader2166465",
					"patEntityId" : 2166465,
					"patEntityType" : "PatientResultHeader",
					"patId" : 22334466,
					"patName" : "Toovey, Shawn",
					"patGenderAgeDobMrn" : "M/103 - 12/12/1912 - 2166465",
					"patPhone" : null,
					"dateOfService" : "1431029485000",
					"dateOfEntry" : "1431029517016",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC w/ Retic",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Toovey, Shawn (M/103 - 12/12/1912 - 2166465)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 6,
					"avatar" : "images/defaultMalePatientPhoto-mobile.png",
					"uniqueId" : "PatientResultHeader2166401",
					"patEntityId" : 2166401,
					"patEntityType" : "PatientResultHeader",
					"patId" : 661630,
					"patName" : "Knobeloch, Jim",
					"patGenderAgeDobMrn" : "M/103 - 12/12/1912 - 661630",
					"patPhone" : null,
					"dateOfService" : "1431028823000",
					"dateOfEntry" : "1431028852479",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC w/ Retic",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Knobeloch, Jim (M/103 - 12/12/1912 - 661630)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 1,
					"avatar" : "images/005.jpg",
					"uniqueId" : "PatientResultHeader1723997",
					"patEntityId" : 1723997,
					"patEntityType" : "PatientResultHeader",
					"patId" : 11111,
					"patName" : "Bean, Orson ",
					"patGenderAgeDobMrn" : "F/38 - 12/07/1977 - 767888",
					"patPhone" : null,
					"dateOfService" : "1423422000000",
					"dateOfEntry" : "1423388577707",
					"reviewStatus" : "PENDING",
					"resultName" : "DOG DANDER (E5) IGE",
					"resultFlag" : "HIGH",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Bean, Orson  (F/38 - 12/07/1977 - 767888)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 2,
					"avatar" : "images/006.jpg",
					"uniqueId" : "PatientResultHeader2034336",
					"patEntityId" : 2034336,
					"patEntityType" : "PatientResultHeader",
					"patId" : 22222,
					"patName" : "Kozak, Heidi",
					"patGenderAgeDobMrn" : "F/36 - 12/01/1979 - 22222",
					"patPhone" : null,
					"dateOfService" : "1427010203000",
					"dateOfEntry" : "1427010220214",
					"reviewStatus" : "PENDING",
					"resultName" : "Panel3/22",
					"resultFlag" : "NORMAL",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Kozak, Heidi  (F/36 - 12/01/1979 - 22222)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 3,
					"avatar" : "images/007.jpg",
					"uniqueId" : "PatientResultHeader2175385",
					"patEntityId" : 2175385,
					"patEntityType" : "PatientResultHeader",
					"patId" : 33333,
					"patName" : "Strickland, Gail",
					"patGenderAgeDobMrn" : "F/50 - 10/19/1965 - 33333",
					"patPhone" : null,
					"dateOfService" : "1431445271000",
					"dateOfEntry" : "1431445324070",
					"reviewStatus" : "PENDING",
					"resultName" : "INR",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Strickland, Gail (F/50 - 10/19/1965 - 33333)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 4,
					"avatar" : "images/008.jpg",
					"uniqueId" : "PatientResultHeader2166546",
					"patEntityId" : 2166546,
					"patEntityType" : "PatientResultHeader",
					"patId" : 44444,
					"patName" : "Flores, Erika",
					"patGenderAgeDobMrn" : "F/103 - 12/12/1912 - pentium333",
					"patPhone" : null,
					"dateOfService" : "1431030311000",
					"dateOfEntry" : "1431030348618",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC w/ Retic",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Flores, Erika (F/103 - 12/12/1912 - pentium333)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 5,
					"avatar" : "images/009.jpg",
					"uniqueId" : "PatientResultHeader2166465",
					"patEntityId" : 2166465,
					"patEntityType" : "PatientResultHeader",
					"patId" : 55555,
					"patName" : "Knobeloch, Jim",
					"patGenderAgeDobMrn" : "M/103 - 12/12/1912 - TestingAgagin333",
					"patPhone" : null,
					"dateOfService" : "1431029485000",
					"dateOfEntry" : "1431029517016",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC w/ Retic",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Knobeloch, Jim (M/103 - 12/12/1912 - TestingAgagin333)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 6,
					"avatar" : "images/010.jpg",
					"uniqueId" : "PatientResultHeader2166401",
					"patEntityId" : 2166401,
					"patEntityType" : "PatientResultHeader",
					"patId" : 66666,
					"patName" : "Knobeloch, Jim",
					"patGenderAgeDobMrn" : "M/103 - 12/12/1912 - TestingAgagin333",
					"patPhone" : null,
					"dateOfService" : "1431028823000",
					"dateOfEntry" : "1431028852479",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC w/ Retic",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Knobeloch, Jim (M/103 - 12/12/1912 - TestingAgagin333)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 1,
					"avatar" : "images/011.jpg",
					"uniqueId" : "PatientResultHeader1723997",
					"patEntityId" : 1723997,
					"patEntityType" : "PatientResultHeader",
					"patId" : 77777,
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
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 2,
					"avatar" : "images/012.jpg",
					"uniqueId" : "PatientResultHeader2034336",
					"patEntityId" : 2034336,
					"patEntityType" : "PatientResultHeader",
					"patId" : 88888,
					"patName" : "Seymour, Jane ",
					"patGenderAgeDobMrn" : "F/36 - 12/01/1979 - 65656",
					"patPhone" : null,
					"dateOfService" : "1427010203000",
					"dateOfEntry" : "1427010220214",
					"reviewStatus" : "PENDING",
					"resultName" : "Panel3/22",
					"resultFlag" : "NORMAL",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Seymour, Jane  (F/36 - 12/01/1979 - 65656)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 3,
					"avatar" : "images/013.jpg",
					"uniqueId" : "PatientResultHeader2175385",
					"patEntityId" : 2175385,
					"patEntityType" : "PatientResultHeader",
					"patId" : 99999,
					"patName" : "Strickland, Gail ",
					"patGenderAgeDobMrn" : "F/50 - 10/19/1965 - zztestma1",
					"patPhone" : null,
					"dateOfService" : "1431445271000",
					"dateOfEntry" : "1431445324070",
					"reviewStatus" : "PENDING",
					"resultName" : "INR",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Strickland, Gail  (F/50 - 10/19/1965 - zztestma1)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 4,
					"avatar" : "images/014.jpg",
					"uniqueId" : "PatientResultHeader2166546",
					"patEntityId" : 2166546,
					"patEntityType" : "PatientResultHeader",
					"patId" : 10101010,
					"patName" : "Flores, Erika",
					"patGenderAgeDobMrn" : "F/103 - 12/12/1912 - pentium333",
					"patPhone" : null,
					"dateOfService" : "1431030311000",
					"dateOfEntry" : "1431030348618",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC w/ Retic",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Flores, Erika (F/103 - 12/12/1912 - pentium333)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 5,
					"avatar" : "images/015.jpg",
					"uniqueId" : "PatientResultHeader2166465",
					"patEntityId" : 2166465,
					"patEntityType" : "PatientResultHeader",
					"patId" : 10101011,
					"patName" : "Toovey, Shawn",
					"patGenderAgeDobMrn" : "M/103 - 12/12/1912 - TestingAgagin333",
					"patPhone" : null,
					"dateOfService" : "1431029485000",
					"dateOfEntry" : "1431029517016",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC w/ Retic",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Toovey, Shawn (M/103 - 12/12/1912 - TestingAgagin333)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				},
				{
					"id" : 6,
					"avatar" : "images/016.jpg",
					"uniqueId" : "PatientResultHeader2166401",
					"patEntityId" : 2166401,
					"patEntityType" : "PatientResultHeader",
					"patId" : 10101012,
					"patName" : "Toovey, Shawn",
					"patGenderAgeDobMrn" : "M/103 - 12/12/1912 - TestingAgagin333",
					"patPhone" : null,
					"dateOfService" : "1431028823000",
					"dateOfEntry" : "1431028852479",
					"reviewStatus" : "PENDING",
					"resultName" : "CBC w/ Retic",
					"resultFlag" : "NONE",
					"reviewCategory" : "Lab",
					"transferred" : false,
					"patientDisplayString" : "Toovey, Shawn (M/103 - 12/12/1912 - TestingAgagin333)",
					"isSelected" : false,
					"selectionIcon" : "add-circle"
				} ]

    }-*/;

    public static native JsArray<Patient> getPatients() /*-{
		return [ {
			"id" : 67647,
			"middleName" : "D",
			"gender" : "F",
			"avatar" : "images/001.jpg",
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
			"avatar" : "images/002.jpg",
			"dob" : "02/14/1926",
			"firstName" : "Shawna",
			"primaryId" : "1223",
			"age" : 28,
			"lastName" : "Plust",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 213723,
			"middleName" : "J",
			"gender" : "F",
			"avatar" : "images/003.jpg",
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
			"avatar" : "images/004.jpg",
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
			"avatar" : "images/005.jpg",
			"dob" : "02/14/1926",
			"firstName" : "Michelle",
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
			"avatar" : "images/006.jpg",
			"dob" : "02/14/1987",
			"firstName" : "Stephanie",
			"primaryId" : "75patch2",
			"age" : 28,
			"lastName" : "Ponch",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 1381094,
			"middleName" : null,
			"gender" : "M",
			"avatar" : "images/007.jpg",
			"dob" : "02/28/1967",
			"firstName" : "George",
			"primaryId" : "MRN001",
			"age" : 46,
			"lastName" : "Michelson",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 421003,
			"middleName" : null,
			"gender" : "F",
			"avatar" : "images/008.jpg",
			"dob" : "01/14/1955",
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
			"avatar" : "images/009.jpg",
			"dob" : "12/14/1968",
			"firstName" : "Ingrid",
			"primaryId" : "767676",
			"age" : 29,
			"lastName" : "Johnson",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 247362,
			"middleName" : null,
			"gender" : "M",
			"avatar" : "images/010.jpg",
			"dob" : "02/14/1944",
			"firstName" : "Michael",
			"primaryId" : "demotest2222",
			"age" : 66,
			"lastName" : "McDougal",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 661630,
			"middleName" : "qa",
			"gender" : "M",
			"avatar" : "images/011.jpg",
			"dob" : "02/14/1913",
			"firstName" : "Bob",
			"primaryId" : "TestingAgagin333",
			"age" : 103,
			"lastName" : "Wilch",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 661664,
			"middleName" : "qa",
			"gender" : "F",
			"avatar" : "images/012.jpg",
			"dob" : "02/10/1913",
			"firstName" : "Patch",
			"primaryId" : "pentium333",
			"age" : 103,
			"lastName" : "McDougal",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 665862,
			"middleName" : null,
			"gender" : "F",
			"avatar" : "images/014.jpg",
			"dob" : "02/14/1966",
			"firstName" : "Sammie",
			"primaryId" : "zztestma1",
			"age" : 50,
			"lastName" : "Smith",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 625179,
			"middleName" : null,
			"gender" : "F",
			"avatar" : "images/015.jpg",
			"dob" : "06/14/1979",
			"firstName" : "Jill",
			"primaryId" : "65656",
			"age" : 36,
			"lastName" : "Jackson",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 673515,
			"middleName" : "release76",
			"gender" : "F",
			"avatar" : "images/016.jpg",
			"dob" : "02/14/1926",
			"firstName" : "Tina",
			"primaryId" : "MCPTest",
			"age" : 36,
			"lastName" : "Taylor",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 1379628,
			"middleName" : null,
			"gender" : "M",
			"avatar" : "images/001.jpg",
			"dob" : "02/14/1926",
			"firstName" : "Robert",
			"primaryId" : "notyet123",
			"age" : 103,
			"lastName" : "Fillmore",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 1367809,
			"middleName" : null,
			"gender" : "U",
			"avatar" : "images/002.jpg",
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
			"avatar" : "images/003.jpg",
			"dob" : "02/14/1926",
			"firstName" : "Chris",
			"primaryId" : "123456",
			"age" : 67,
			"lastName" : "Jensent",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 1379648,
			"middleName" : null,
			"gender" : "M",
			"avatar" : "images/004.jpg",
			"dob" : "02/14/1913",
			"firstName" : "Jack",
			"primaryId" : "notoyes",
			"age" : 103,
			"lastName" : "Black",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 485143,
			"middleName" : null,
			"gender" : "M",
			"avatar" : "images/005.jpg",
			"dob" : "02/14/1934",
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
			"avatar" : "images/006.jpg",
			"dob" : "02/14/1955",
			"firstName" : "Willie",
			"primaryId" : "k98876",
			"age" : 55,
			"lastName" : "Patch",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 64242,
			"middleName" : null,
			"gender" : "F",
			"avatar" : "images/007.jpg",
			"dob" : "02/14/1966",
			"firstName" : "Sam",
			"primaryId" : "zz34y64hs",
			"age" : 66,
			"lastName" : "Branch",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 115383,
			"middleName" : null,
			"gender" : "M",
			"avatar" : "images/008.jpg",
			"dob" : "02/14/1998",
			"firstName" : "Smith",
			"primaryId" : "324324",
			"age" : 18,
			"lastName" : "McNight",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 898312,
			"middleName" : null,
			"gender" : "F",
			"avatar" : "images/009.jpg",
			"dob" : "02/14/1969",
			"firstName" : "Kenneth",
			"primaryId" : "kmarx1-666",
			"age" : 49,
			"lastName" : "Chang",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		}, {

			"id" : 9762,
			"middleName" : "tulsian",
			"gender" : "M",
			"avatar" : "images/010.jpg",
			"dob" : "02/14/1976",
			"firstName" : "Nathin",
			"primaryId" : "101196822",
			"age" : 35,
			"lastName" : "Agarwal",
			"physician" : "Dr. Spock",
			"alias" : null,
			"suffix" : null
		} ]

    }-*/;

    public static class Provider extends JavaScriptObject {
        protected Provider() {
        };
        public final native int userId() /*-{
			return this.userId;
        }-*/;

        public final native String last() /*-{
			return this.lastName;
        }-*/;

        public final native String first() /*-{
			return this.firstName;
        }-*/;

    }

    public static native JsArray<Provider> getProviders() /*-{
		return [ {
			"userId" : 45892,
			"lastName" : "Chakraborty",
			"firstName" : "Abhishek  "
		}, {
			"userId" : 5315,
			"lastName" : "Adams",
			"firstName" : "Chad  "
		}, {
			"userId" : 26277,
			"lastName" : "Shrestha",
			"firstName" : "Aakar  "
		}, {
			"userId" : 6235,
			"lastName" : "Austin",
			"firstName" : "Michael C. "
		}, {
			"userId" : 9495,
			"lastName" : "Chapman",
			"firstName" : "Matt  "
		}, {
			"userId" : 46097,
			"lastName" : "physician",
			"firstName" : "harmit  "
		}, {
			"userId" : 35958,
			"lastName" : "Zzsingh",
			"firstName" : "harmit  "
		}, {
			"userId" : 81,
			"lastName" : "Graham",
			"firstName" : "Lauren  "
		}, {
			"userId" : 40255,
			"lastName" : "Havaldar",
			"firstName" : "Manasi  "
		}, {
			"userId" : 241,
			"lastName" : "Moore",
			"firstName" : "Michael B. "
		}, {
			"userId" : 801,
			"lastName" : "Dar",
			"firstName" : "Muhammad L. "
		}, {
			"userId" : 9355,
			"lastName" : "zzHemani",
			"firstName" : "zMuhammad  "
		}, {
			"userId" : 5155,
			"lastName" : "MockClinic",
			"firstName" : "RN/Pharm  "
		}, {
			"userId" : 1001,
			"lastName" : "Moore",
			"firstName" : "Michael B. "
		}, {
			"userId" : 5775,
			"lastName" : "Mucher",
			"firstName" : "Zachary  "
		}, {
			"userId" : 5317,
			"lastName" : "Planchard",
			"firstName" : "Cindy  "
		}, {
			"userId" : 13336,
			"lastName" : "Seiden",
			"firstName" : "Michael  "
		}, {
			"userId" : 7235,
			"lastName" : "MDAlpha2-01",
			"firstName" : "G2 T. "
		}, {
			"userId" : 7275,
			"lastName" : "MDAlpha2-02",
			"firstName" : "G2 U. "
		}, {
			"userId" : 7315,
			"lastName" : "MDAlpha2-03",
			"firstName" : "G2 U. "
		}, {
			"userId" : 5915,
			"lastName" : "Willen",
			"firstName" : "Michael A. "
		} ]

    }-*/;

    public static class LabResults extends JavaScriptObject {
        protected LabResults() {
        };
        public final native String conceptName() /*-{
			return this.conceptName;
        }-*/;
        public final native String resultDates() /*-{
			return this.resultDates[0];
        }-*/;

    }

    public static native JsArray<LabResults> getLabResults() /*-{
        return 
[{
        "conceptName" : "LP697.5",
        "labNameAndAddress" : "default",
        "attachedDocs" : [{
                "id" : 20481,
                "modifiedDate" : "1391501034823",
                "name" : "Remapping the mapped test.docx",
                "fid" : 133086,
                "mime" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "beanErrors" : "default"
            }
        ],
        "subconceptNames" : ["Testosterone, free", "Genetics Comments", "Glucose tolerance test, 2 hours"],
        "resultDates" : ["02/03/2014 12:02 AM"],
        "isReviewed" : "PENDING",
        "id" : "152722",
        "resultValues" : {
            "Testosterone, free" : [{
                    "id" : 1223430,
                    "resultDate" : "02/03/2014 12:02 AM",
                    "resultUnits" : "pg/mL",
                    "referenceLow" : "12",
                    "referenceHigh" : "33",
                    "nonNumericRefRange" : "default",
                    "resultComment" : "default",
                    "resultValue" : "23",
                    "resultFlag" : "NORMAL",
                    "resultValueHtml" : "<div class=\"LabResult_normal\"><pre>23</pre></div>",
                    "valueDisplayString" : "<div class=\"LabResult_normal\"><pre>23</pre></div>",
                    "testUnitRangeDisplayString" : "Testosterone, free (pg/mL) [12 - 33]"
                }
            ],
            "Genetics Comments" : [{
                    "id" : 1223431,
                    "resultDate" : "02/03/2014 12:02 AM",
                    "resultUnits" : "default",
                    "referenceLow" : "default",
                    "referenceHigh" : "default",
                    "nonNumericRefRange" : "default",
                    "resultComment" : "default",
                    "resultValue" : "test comments",
                    "resultFlag" : "NONE",
                    "resultValueHtml" : "<div class=\"LabResult_normal\"><pre>test comments</pre></div>",
                    "valueDisplayString" : "<div class=\"LabResult_normal\"><pre>test comments</pre></div> Lab: 123 mission",
                    "testUnitRangeDisplayString" : "Genetics Comments"
                }
            ],
            "Glucose tolerance test, 2 hours" : [{
                    "id" : 1223429,
                    "resultDate" : "02/03/2014 12:02 AM",
                    "resultUnits" : "mg/dL",
                    "referenceLow" : "default",
                    "referenceHigh" : "default",
                    "nonNumericRefRange" : "default",
                    "resultComment" : "default",
                    "resultValue" : "80",
                    "resultFlag" : "NONE",
                    "resultValueHtml" : "<div class=\"LabResult_normal\"><pre>80</pre></div>",
                    "valueDisplayString" : "<div class=\"LabResult_normal\"><pre>80</pre></div>",
                    "testUnitRangeDisplayString" : "Glucose tolerance test, 2 hours (mg/dL)"
                }
            ]
        }
    }
]

    }-*/;

}
