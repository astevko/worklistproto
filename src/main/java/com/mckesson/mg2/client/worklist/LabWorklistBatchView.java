/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.SampleData.LabWorklist;
import com.mckesson.mg2.client.patient.NavMenuView;
import com.mckesson.mg2.client.utils.MG2Log;
import com.vaadin.polymer.iron.widget.IronList;

/**
 * Batch lab worklist view
 * 
 * @author efdj6eb
 *
 */
public class LabWorklistBatchView extends NavMenuView {

    /**
     * logger 
     */
    private static final MG2Log log = new MG2Log(LabWorklistBatchView.class);
    
    private LabWorklistViewUiBinder uiBinder = GWT.create(LabWorklistViewUiBinder.class);

    interface LabWorklistViewUiBinder extends UiBinder<Widget, LabWorklistBatchView> {
    }
    
    /**
     * lab work list
     */
    @UiField IronList list;
    
    
    public LabWorklistBatchView() {
        initWidget(uiBinder.createAndBindUi(this));
        log.info("LabWorklistBatchView()");        
     }
    

    /* (non-Javadoc)
     * @see com.mckesson.mg2.client.worklist.WorkliskView#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(Widget widget) {        
        super.initWidget(widget);

        list.setSelectionEnabled(true);
        list.setMultiSelection(true);
        list.setItems(SampleData.getLabWorklists());

        list.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
                SampleData.LabWorklist item = (SampleData.LabWorklist) list.getSelectedItem();
                log.info("Open lab results ");
                item.toggleSelection();
                list.notifyResize();
            }
        });
        list.notifyResize();
    }

    /**
     * @param item
     */
    public void setSelectedItem(LabWorklist item) {
        list.setSelectedItem(item);
        item.toggleSelection();
//        list.notifyResize();
    }
}
