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
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;
import com.googlecode.mgwt.dom.client.event.tap.TapEvent;
import com.googlecode.mgwt.dom.client.event.tap.TapHandler;
import com.googlecode.mgwt.ui.client.widget.touch.TouchPanel;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.SampleData.Provider;
import com.mckesson.mg2.client.utils.MG2Log;
import com.vaadin.polymer.paper.widget.PaperToast;

/**
 * @author efdj6eb
 *
 */
public class TransferProviderView extends Composite {
    interface TransferProviderViewUiBinder extends UiBinder<Widget, TransferProviderView> {
    }
    
    interface ListItem extends SafeHtmlTemplates {
        @Template("<div class='item' id='{0}' ><span class='left'>{1}, {2}</span> <iron-icon class='right' hidden='true' icon='arrow-forward'></iron-icon></div>")
        SafeHtml template(String id, String last, String first);
    }

    static final ListItem ITEM = GWT.create(ListItem.class);

    /**
     * logger 
     */
    private static final MG2Log log = new MG2Log(LabWorklistBatchView.class);


    private TransferProviderViewUiBinder uiBinder = GWT.create(TransferProviderViewUiBinder.class);

    public TransferProviderView() {
        initWidget(uiBinder.createAndBindUi(this));
        log.info("TransferProviderView()");        
        populateList(SampleData.getProviders());        
    }

    @UiField
    Label cancelButton;

    @UiField
    PaperToast toast1;
    
    @UiField
    PaperToast toast2;
    
    @UiField
    PaperToast toast3;
    
    @UiField
    HTMLPanel list;
    
    /**
     * capture the selected item id
     */
    String selectedItemId = "";

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
                WorklistView.gotoLabWorklistBatchView();
            }
        });
    }
    /**
     * @param providers
     */
    protected void populateList(final JsArray<Provider> providers) {
        // create paper cards for eachitem in the list
        for (int i = 0; i < providers.length(); i++) {
            final Provider provider = providers.get(i);
            final String userId = Integer.toString(provider.userId());
            final SafeHtml html =
                    ITEM.template(userId, provider.last(), provider.first());
            final TouchPanel panel = new TouchPanel();
            panel.addTapHandler(new SelectTapHandler(userId));
            panel.add(new HTML(html));
            list.add(panel);
            
        }

    }

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

    /**
     * fancy select/deselect/perform action
     * if item not selected, deselect prior selections & select item
     * if item previously selected, perform action
     * @param itemId 
     * 
     */
    void toggleSelected(final String itemId) {        
        final Element item = DOM.getElementById(itemId);
        // toggle the add/check icon
        if (isSelectedItem(item)) {
            if (selectedItemId.equals(itemId)) {
                // double click!
                performTransfer(itemId);
            } else {
                deselectItem(item);
            }
        } else {
            if (!selectedItemId.isEmpty()) {
                deselectItem(selectedItemId);
            }
            selectItem(itemId);
        }
    }
    
    /**
     * @param itemId itemId to select
     */
    private void performTransfer(String itemId) {
        toast1.show();
        WorklistView.gotoLabWorklistView();
    }
    
    boolean isSelectedItem(final String itemId) {
        final Element item = DOM.getElementById(itemId);
        return isSelectedItem(item);
    }
    
    boolean isSelectedItem(final Element item) {
        final NodeList<com.google.gwt.dom.client.Element> icons = item.getElementsByTagName("iron-icon");
        final com.google.gwt.dom.client.Element icon = icons.getItem(0);
        final String hiddenAttribute = icon.getAttribute("hidden");
        return hiddenAttribute.isEmpty();        
    }
    
    void deselectItem(final String itemId) {
        final Element item = DOM.getElementById(itemId);
        deselectItem(item);
    }
    /**
     * @param item
     */
    void deselectItem(final Element item) {
        final NodeList<com.google.gwt.dom.client.Element> icons = item.getElementsByTagName("iron-icon");
        final com.google.gwt.dom.client.Element icon = icons.getItem(0);
        // selected -> off 
        selectedItemId = "";
        icon.setAttribute("hidden", "true");
        item.removeClassName("selected");
    }
    /**
     * @param itemId
     */
    void selectItem(final String itemId) {
        final Element item = DOM.getElementById(itemId);
        final NodeList<com.google.gwt.dom.client.Element> icons = item.getElementsByTagName("iron-icon");
        final com.google.gwt.dom.client.Element icon = icons.getItem(0);
        // NOT selected -> on
        selectedItemId = itemId;
        icon.removeAttribute("hidden");
        item.addClassName("selected");
    }

    
}
