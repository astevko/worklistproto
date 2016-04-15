/**
 * 
 */
package com.mckesson.mg2.client.patient;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.TouchEndEvent;
import com.google.gwt.event.dom.client.TouchEndHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.InlineHTML;
import com.google.gwt.user.client.ui.Widget;
import com.googlecode.mgwt.ui.client.widget.animation.Animation;
import com.googlecode.mgwt.ui.client.widget.animation.Animations;
import com.mckesson.mg2.client.MainView;
import com.mckesson.mg2.client.utils.MG2Log;

/**
 * container for handling patient menu selections
 * 
 * @author efdj6eb
 *
 */
public abstract class PatientView extends ToastedView {
    
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
        
        MainView.get().gotoView((LabResultsView) GWT.create(LabResultsView.class)); 
    }
    public static void gotoLabResultsView(Animation anim) {
        
        MainView.get().gotoView((LabResultsView) GWT.create(LabResultsView.class), anim); 
    }

    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Composite#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(Widget widget) {
        super.initWidget(widget);
        
        tabNotes.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                toast.setText("Notes under construction");
            }
        });
        tabLabResults.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                gotoLabResultsView(Animations.POP);
            }
        });
        tabProblems.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                toast.setText("Problems under construction");
            }
        });
        tabAttachments.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                toast.setText("Attachments under construction");
            }
        });
        tabMedications.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                toast.setText("Medications under construction");
            }
        });
        tabAllergies.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                toast.setText("Allergies under construction");
            }
        });
        tabContactInfo.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                toast.setText("Contact Info under construction");
            }
        });
        tabProfilePhoto.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                toast.setText("Profile Photo under construction");
            }
        });
    }
}
