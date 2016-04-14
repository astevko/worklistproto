/**
 * 
 */
package com.mckesson.mg2.client.patient;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.TouchEndEvent;
import com.google.gwt.event.dom.client.TouchEndHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.InlineHTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.SampleData.Patient;
import com.mckesson.mg2.client.worklist.WorklistView;

/**
 * @author efdj6eb
 *
 */
public class LabResultsView extends PatientView {

    private static LabResultsViewUiBinder uiBinder = GWT.create(LabResultsViewUiBinder.class);

    interface LabResultsViewUiBinder extends UiBinder<Widget, LabResultsView> {
    }

    @UiField Image patientPhoto;
    @UiField Label name;
    @UiField Label patientInfo;
    @UiField InlineHTML navTransfer;
    @UiField InlineHTML navSendMessage;
    @UiField InlineHTML navReview;
    
    public LabResultsView() {
        initWidget(uiBinder.createAndBindUi(this));
    }

    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Composite#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(Widget widget) {        
        super.initWidget(widget);
        
        navTransfer.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
                log.info("click transfer");
                WorklistView.gotoTransferProvider();
            }
        });
        navTransfer.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                log.info("tap transfer");
                WorklistView.gotoTransferProvider();
                
            }
        });
        navSendMessage.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
                log.info("click navSendMessage");
                WorklistView.gotoTransferProvider();     //TODO replace
            }
        });
        navSendMessage.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                log.info("tap navSendMessage");
                WorklistView.gotoTransferProvider();    //TODO replace
                
            }
        });
        navReview.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
                log.info("click navReview");
                WorklistView.gotoTransferProvider();     //TODO replace
            }
        });
        navReview.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
                log.info("tap navReview");
                WorklistView.gotoTransferProvider();     //TODO replace
                
            }
        });
        
    }
    
    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Widget#onLoad()
     */
    @Override
    protected void onLoad() {        
        super.onLoad();
        
        Patient patient = SampleData.getPatients().get(0);
//        patientPhoto.setUrl(patient.avatar());
        name.setText(patient.name());
        patientInfo.setText( "MRN:&nbsp;" + patient.mrn() + ",&nbspDOB:&nbsp;" + patient.dob());        
    }
}
