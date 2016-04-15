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
import com.vaadin.polymer.paper.widget.PaperButton;

/**
 * @author efdj6eb
 *
 */
public class ImagingView extends WorklistView {

    private static ImagingViewUiBinder uiBinder = GWT.create(ImagingViewUiBinder.class);

    interface ImagingViewUiBinder extends UiBinder<Widget, ImagingView> {
    }

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
    public ImagingView() {
        initWidget(uiBinder.createAndBindUi(this));
    }

    @UiField  PaperButton endoftheinternet;
    
    /* (non-Javadoc)
     * @see com.mckesson.mg2.client.worklist.WorklistView#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(Widget widget) {
        
        super.initWidget(widget);
        
        endoftheinternet.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
               WorklistView.gotoLabWorklistView();
            }
        });
    }
}
