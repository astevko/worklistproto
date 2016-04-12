/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.SampleData.LabWorklist;
import com.mckesson.mg2.client.utils.MG2Log;

/**
 * @author efdj6eb
 *
 */
public class LabWorklistView extends WorklistView {
    public interface ListItem extends SafeHtmlTemplates {
        @Template("<div class='item_outer'> <div class='item'> <img class='avatar' src='{0}'> <div class='pad'> <div class='primary'>{1}</div> <div class='secondary'>{2}</div> <div class='secondary dim'>{3}</div> </div> </div> </div>")
        SafeHtml template(String avatar, String primary, String MRN_DOB, String tertiary);
      };

    static final ListItem ITEM = GWT.create(ListItem.class);

    
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
//    @UiField IronList list;
    @UiField HTMLPanel list;

   
    public LabWorklistView() {
        initWidget(uiBinder.createAndBindUi(this));        
        log.info("LabWorklistView()");
        populateList(SampleData.getLabWorklists());
     }
    
    /**
     * @param labWorklists
     */
    protected void populateList(JsArray<LabWorklist> labWorklists) {
        // create paper cards for eachitem in the list
        for (int i = 0; i < labWorklists.length(); i++) {            
            final LabWorklist labWorklist = labWorklists.get(i);
            list.add(new HTML( ITEM.template(labWorklist.avatar(), labWorklist.patientDisplayString(), labWorklist.patGenderAgeDobMrn(), labWorklist.resultName())));
        }
        
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

//        list.setSelectionEnabled(true);
//        list.addClickHandler(new ClickHandler() {
//            
//            @Override
//            public void onClick(ClickEvent event) {
//                SampleData.LabWorklist item = (SampleData.LabWorklist) list.getSelectedItem();
//                log.info("Open lab results "  + item.patientDisplayString() );
//                gotoLabWorklistBatchView(item);
//            }
//        });
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
