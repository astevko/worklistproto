/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.patient.NavMenuView;
import com.mckesson.mg2.client.utils.MG2Log;
import com.vaadin.polymer.iron.widget.IronList;

/**
 * @author efdj6eb
 *
 */
public class LabWorklistView extends NavMenuView {

    /**
     * logger 
     */
    private static final MG2Log log = new MG2Log(LabWorklistView.class);
    
    private LabWorklistViewUiBinder uiBinder = GWT.create(LabWorklistViewUiBinder.class);

    interface LabWorklistViewUiBinder extends UiBinder<Widget, LabWorklistView> {
    }
    
    /**
     * lab work list
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
    public LabWorklistView() {
        initWidget(uiBinder.createAndBindUi(this));
        log.info("LabWorklistView()");
     }
    

    /* (non-Javadoc)
     * @see com.mckesson.mg2.client.worklist.WorkliskView#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(Widget widget) {        
        super.initWidget(widget);
        
        // TODO select tab
        // TODO select nav
    }
    
    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Widget#onLoad()
     */
    @Override
    protected void onLoad() {
        super.onLoad();
        
        list.setItems(SampleData.getLabWorklists());
    }
}
