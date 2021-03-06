/**
 * 
 */
package com.mckesson.mg2.client.patient;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.MainView;
import com.mckesson.mg2.client.utils.MG2Log;

/**
 * @author efdj6eb
 *
 */
public class MessageView extends Composite {
    /**
     * logger 
     */
    private static final MG2Log log = new MG2Log(MessageView.class);

    private static MessageViewUiBinder uiBinder = GWT.create(MessageViewUiBinder.class);

    interface MessageViewUiBinder extends UiBinder<Widget, MessageView> {
    }

    @UiField
    Image still;
    
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
    public MessageView() {
        initWidget(uiBinder.createAndBindUi(this));
        
        still.addClickHandler(new ClickHandler() {
            
            @Override
            public void onClick(ClickEvent event) {
                MainView.get().gotoView((Widget) GWT.create(PatientSearchView.class));
            }
        });
    }

}
