/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.SampleData.LabWorklist;
import com.mckesson.mg2.client.utils.MG2Log;
import com.vaadin.polymer.iron.widget.IronList;

/**
 * @author efdj6eb
 *
 */
public class LabWorklistView extends WorklistView {

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

   
    public LabWorklistView() {
        initWidget(uiBinder.createAndBindUi(this));        
        log.info("LabWorklistView()");
        list.setItems(SampleData.getLabWorklists());
     }
    
    protected void gotoLabWorklistBatchView(LabWorklist item) {
        log.info("gotoLabWorklistBatchView()");
        // clicked tab
        final LabWorklistBatchView batchView = GWT.create(LabWorklistBatchView.class);
        clear();
        RootPanel.get().add((Widget) batchView);        
        batchView.setSelectedItem(item);
    }
    
    
    /* (non-Javadoc)
     * @see com.mckesson.mg2.client.worklist.WorkliskView#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(Widget widget) {        
        super.initWidget(widget);

        list.setSelectionEnabled(true);
        list.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
                SampleData.LabWorklist item = (SampleData.LabWorklist) list.getSelectedItem();
                log.info("Open lab results "  + item.patientDisplayString() );
                gotoLabWorklistBatchView(item);
            }
        });
        // TODO select tab
        // TODO select nav
    }
    
    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Widget#onLoad()
     */
    @Override
    protected void onLoad() {
        super.onLoad();
    }
}
