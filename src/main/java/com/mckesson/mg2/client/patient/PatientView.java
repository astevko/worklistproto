/**
 * 
 */
package com.mckesson.mg2.client.patient;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.InlineHTML;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.MainView;
import com.mckesson.mg2.client.utils.MG2Log;

/**
 * container for handling patient menu selections
 * 
 * @author efdj6eb
 *
 */
public abstract class PatientView extends Composite {
    
    /**
     * logger
     */
    static final MG2Log log = new MG2Log(PatientView.class);
    
    
    @UiField public InlineHTML tabNotes;
    @UiField public InlineHTML tabLabResults;
    @UiField public InlineHTML tabProblems;
    @UiField public InlineHTML tabAttachments;
    @UiField public InlineHTML tabMedications;
    @UiField public InlineHTML tabAllergies;
    @UiField public InlineHTML tabContactInfo;
    @UiField public InlineHTML tabProfilePhoto;
    /**
     * 
     */
    public static void gotoLabResultsView() {
        
        MainView.get().gotoView((Widget) GWT.create(LabResultsView.class)); 
    }

}
