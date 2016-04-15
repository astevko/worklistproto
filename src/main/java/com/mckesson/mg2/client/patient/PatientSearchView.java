/**
 * 
 */
package com.mckesson.mg2.client.patient;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.utils.MG2Log;
import com.vaadin.polymer.iron.widget.IronList;
import com.vaadin.polymer.paper.widget.PaperIconButton;

/**
 * 2nd view - patient search view
 * 
 * @author efdj6eb
 *
 */
public class PatientSearchView extends NavMenuView {
    /**
     * logger 
     */
    static final MG2Log log = new MG2Log(PatientSearchView.class);


    private static PatientSearchViewUiBinder uiBinder = GWT.create(PatientSearchViewUiBinder.class);

    interface PatientSearchViewUiBinder extends UiBinder<Widget, PatientSearchView> {
    }
    
    @UiField PaperIconButton search;
    /**
     * patient list
     */
    @UiField IronList list;
    
    /**
     * Because this class has a default constructor, it can
     * be used as a binder template. In other words, it can be used in other
     * *.ui.xml files as follows:
     * <ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
     *   xmlns:g="urn:import:**user's package**">
     *  <g:**UserClassName**>Hello!</g:**UserClassName>
     * </ui:UiBinder>
     * Note that depending on the widget that is used, it may be necessary to
     * implement HasHTML instead of HasText.
     */
    public PatientSearchView() {        
        initWidget(uiBinder.createAndBindUi(this));
        
        list.setItems(SampleData.getPatients());
        this.toastMessage = "Please select Worklist";
    }
    
    /* (non-Javadoc)
     * @see com.mckesson.mg2.client.patient.NavMenuView#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(Widget widget) {
        super.initWidget(widget);

        // reset the page on clicking search
        search.addClickHandler(new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                gotoPatientSearchView();
            }
        });
        list.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
                log.info("Item click");
                PatientView.gotoLabResultsView();
            }
        });
    }
}
