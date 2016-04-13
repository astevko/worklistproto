/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.dom.client.NodeList;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.safehtml.shared.SafeUri;
import com.google.gwt.safehtml.shared.UriUtils;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;
import com.googlecode.mgwt.dom.client.event.tap.TapEvent;
import com.googlecode.mgwt.dom.client.event.tap.TapHandler;
import com.googlecode.mgwt.ui.client.widget.touch.TouchPanel;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.SampleData.LabWorklist;
import com.mckesson.mg2.client.patient.NavMenuView;
import com.mckesson.mg2.client.utils.MG2Log;
import com.vaadin.polymer.paper.widget.PaperBadge;
import com.vaadin.polymer.paper.widget.PaperFab;
import com.vaadin.polymer.paper.widget.PaperToast;

/**
 * Batch lab worklist view
 * 
 * @author efdj6eb
 *
 */
@SuppressWarnings("deprecation")
public class LabWorklistBatchView extends NavMenuView {
    interface LabWorklistViewUiBinder extends UiBinder<Widget, LabWorklistBatchView> {
    }

    interface ListItem extends SafeHtmlTemplates {
        @Template("<div class='item_outer'> <div class='item' id='{0}'> <iron-icon icon='add-circle'></iron-icon><img class='avatar' src='{1}'> <div class='pad'> <div class='primary'>{2}</div> <div class='secondary'>{3}</div> <div class='secondary dim'>{4}</div> </div> "
                + " </div> </div>")
        SafeHtml template(String id, SafeUri avatar, String primary, String MRN_DOB, String tertiary);
    }

    static final ListItem ITEM = GWT.create(ListItem.class);

    /**
     * logger 
     */
    private static final MG2Log log = new MG2Log(LabWorklistBatchView.class);

    private LabWorklistViewUiBinder uiBinder = GWT.create(LabWorklistViewUiBinder.class);

    /**
     * lab work list
     */
    @UiField
    HTMLPanel list;

    @UiField
    Label selectedCounter;

    @UiField
    PaperFab fab;
    
    @UiField
    Label cancelButton;

    @UiField
    PaperToast toast1;
    
    @UiField
    PaperToast toast2;
    
    @UiField
    PaperToast toast3;
    
    
    int selectCount = 0;

    @UiField
    PaperBadge fabBadge;
    
    class SelectTapHandler implements TapHandler {

        final String itemId;

        /**
         * 
         */
        public SelectTapHandler(String itemId) {
            this.itemId = itemId;
        }
        /**
         * select the item
         * 
         */
        @Override
        public void onTap(TapEvent event) {
            toggleSelected(itemId);
        }
    }

    public LabWorklistBatchView() {
        initWidget(uiBinder.createAndBindUi(this));
        fab.getElement().setId("FAB");
//        fabBadge.setFor("FAB");
        log.info("LabWorklistBatchView()");        
        populateList(SampleData.getLabWorklists());
        updateCounter();
    }


    /* (non-Javadoc)
     * @see com.mckesson.mg2.client.worklist.WorkliskView#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(Widget widget) {        
        super.initWidget(widget);

        cancelButton.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
                log.info("click cancel");
                toast1.toggle();
                WorklistView.gotoLabWorklistView();
            }
        });
        
        fab.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
                log.info("click fab");
                if (selectCount == 0) {
                    toast3.toggle();
                    return;
                }
                toast2.toggle();
                WorklistView.gotoTransferProvider();
            }
        });
    }

    /**
     * @param labWorklists
     */
    protected void populateList(final JsArray<LabWorklist> labWorklists) {
        // create paper cards for eachitem in the list
        for (int i = 0; i < labWorklists.length(); i++) {
            final LabWorklist labWorklist = labWorklists.get(i);
            final SafeHtml html =
                    ITEM.template(labWorklist.patId(), UriUtils.fromTrustedString(labWorklist.avatar()), labWorklist.patName(), labWorklist.patGenderAgeDobMrn(),
                            labWorklist.resultName());
            final TouchPanel panel = new TouchPanel();
            panel.addTapHandler(new SelectTapHandler(labWorklist.patId()));
            panel.add(new HTML(html));
            list.add(panel);
            
        }

    }


    /**
     * @param itemId 
     * 
     */
    void toggleSelected(final String itemId) {
        // toggle the add/check icon
        final Element item = DOM.getElementById(itemId);
        final NodeList<com.google.gwt.dom.client.Element> icons = item.getElementsByTagName("iron-icon");
        final com.google.gwt.dom.client.Element icon = icons.getItem(0);
        if (icon != null) {
            boolean isSelected = icon.getAttribute("icon").equals("check-circle");
            if (isSelected) {
                icon.setAttribute("icon", "add-circle");
                selectCount--;
            } else {
                icon.setAttribute("icon", "check-circle");
                selectCount++;
            }
            // increment/decrement count
            updateCounter();
        }
    }


    /**
     *  counter is represented in two ways... sub header and badge.. 
     */
    private void updateCounter() {
        if (selectCount > 0) {
            // update counter display
            final String countString = Integer.toString(selectCount);
            fabBadge.setIcon("");
            selectedCounter.setText(countString);
            fabBadge.setLabel(countString);
        } else {            
            selectedCounter.setText("None");
            fabBadge.setIcon("add");
        }        
    }
    
    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Widget#onLoad()
     */
    @Override
    protected void onLoad() {
        super.onLoad();
        
        // select the first item
       toggleSelected("530702");
       toast3.toggle();

        
    }
}
